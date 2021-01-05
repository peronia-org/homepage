const { resolve, relative } = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const component = resolve(__dirname, './src/component/Page/PageBook.tsx');

  const result = await graphql(`
    {
      books: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/README.md" } }
      ) {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  for (const edge of result.data.books.edges) {
    const { fileAbsolutePath } = edge.node;
    const book = relative(__dirname + '/static', fileAbsolutePath);
    reporter.info(`book: ${book}`);

    if (book.startsWith('books/') && book.endsWith('/README.md')) {
      createPage({
        path: book.slice(0, -'README.md'.length),
        component,
        context: { fileAbsolutePath },
      });
    }
  }
};
