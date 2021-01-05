import React from 'react';
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';
import slug from 'slug'

import './Book.css';
import Menu from '../Icon/Menu';
import Logo from '../Peronia/Logo';

export default function PageBook(props: any) {
  const htmlAst = props.data.book.htmlAst as AstRootElement;

  // const headings = props.data.book.headings as {
  //   depth: number;
  //   value: string;
  // }[];

  // const wordCount = props.data.book.wordCount as {
  //   paragraphs: number;
  //   sentences: number;
  //   words: number;
  // };

  const headings = getHeadings(htmlAst)
  const title = headings.find(head => head.tagName === 'h1').value

  return (
    <div className="book">
      <Helmet title={title + ' | peronia.org'} ></Helmet>
      {/* {headings.length > 0 && <nav>
        <div className="index">
          <Logo />
        </div>
        <ul>
          {headings.map(head => (
            <li className={head.tagName}><a href={`#${head.hash}`}>{head.value}</a></li>
          ))}
        </ul>
      </nav>} */}
      <main>
        {htmlAst.children.map((el: any, i: number) => (
          <Element key={i} {...el} />
        ))}
      </main>
    </div>
  );
}

type AstTextElement = { type: 'text', value: string }
type AstHtmlElement = { type: 'element', tagName: string, properties: Record<string, string | number | boolean>, children: AstHtmlElement[] }
type AstRootElement = { type: 'root', children: (AstTextElement | AstHtmlElement)[] }
type AstElement = AstTextElement | AstHtmlElement | AstRootElement

function Element(ast: AstElement): JSX.Element {

  switch (ast.type) {
    case 'element':
      const Tag = ast.tagName as any;
      switch (Tag) {
        case 'img':
        case 'hr':
        case 'br':
          return <Tag {...ast.properties} />;

        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return <Tag id={getHash(ast)} {...ast.properties}>{ElementList(ast)}</Tag>

        default:
          return <Tag {...ast.properties}>{ElementList(ast)}</Tag>
      }

    case 'text':
      return <>{ast.value}</>;

    default:
      return null;
  }
}

function getText(ast: AstElement) {
  if (ast.type === 'text') {
    return ast.value
  }

  let result = ''
  for (const child of ast.children) {
    result += getText(child)
  }

  return result
}

function getHash(ast: AstHtmlElement) {
  return slug(ast.children.map(child => getText(child)).join(''))
}

function getHeadings(ast: AstRootElement) {
  const list = [] as { tagName: string, hash: string, value: string }[]

  for (const child of ast.children) {
    if (child.type === 'element') {
      switch (child.tagName) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          const value = getText(child)
          list.push({
            tagName: child.tagName,
            hash: slug(value),
            value,
          })
      }
    }
  }

  return list
}

function ElementList(ast: AstHtmlElement) {
  return ast.children.map((el: any, i: number) => (
    <Element key={i} {...el} />
  ))
}

export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    book: markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      htmlAst
      headings {
        depth
        value
      }
      wordCount {
        paragraphs
        sentences
        words
      }
      timeToRead
    }
  }
`;
