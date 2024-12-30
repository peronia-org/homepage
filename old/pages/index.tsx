import * as React from 'react';
// import Link from 'gatsby-link';
import PageLayout from '../component/Page/PageLayout';
import Box from '../component/Box/Box';
import SEO from '../component/Page/SEO';
import { Link } from 'gatsby';

const peron = require('../images/peron.jpg');
const bookLover = require('../images/undraw/book_lover.svg');

const books = [
  {
    link: '/books/monopolio-y-competencia/',
    title: 'Monopolio y competencia',
    author: 'Murray N. Rothbard'
  }
];

export default (props: any) => {
  return (
    <PageLayout>
      <SEO
        title={'peronia.org'}
        image={peron}
        description="Información para intentar explicar Argentina"
      />
      <div className="pt-8 pb-32 hero">
        <div className="w-full">
          <div className="relative mx-auto mt-8 mb-24 md:w-2/3 sm:w-full">
            <h1 className="font-serif text-6xl italic text-center text-gray-900">
              Información para intentar entender Argentina
            </h1>
          </div>
          <Box
            rotate={2}
            className="w-full transform bg-gray-900 bg-left-bottom bg-no-repeat h-80"
            style={{
              backgroundImage: `url("${peron}")`,
              backgroundSize: '20rem'
            }}
          >
            <div
              className="flex w-full h-full font-serif text-gray-100 transform"
              style={{ padding: '5rem 5rem 5rem 25rem' }}
            >
              <div>
                <h2 className="text-3xl">
                  Porque hay mentiras, <br />
                  mentiras de mierda <br />
                  y luego las estadísticas
                </h2>
                <p className="mt-2 text-lg text-right">
                  <a
                    className="tooltip"
                    href="httpss://en.wikipedia.org/wiki/Lies,_damned_lies,_and_statistics"
                    target="_blank"
                  >
                    Juan Domingo Perón <sup>(?)</sup>
                    <span className="tooltip-content">
                      Naaaaaaah, es joda, no lo dijo Perón
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </Box>
        </div>
      </div>

      <div className="pt-16 pb-32 page-container">
        <Box
          rotate={-1}
          className="w-full h-40 transform bg-blue-900 bg-left-bottom bg-no-repeat"
          style={{
            backgroundImage: `url("${bookLover}")`,
            backgroundSize: '10rem'
          }}
        >
          <div
            className="flex items-center justify-center w-full h-40 font-serif text-gray-100 transform"
            style={{ padding: '5rem 5rem 5rem 10rem' }}
          >
            <h2 className="text-6xl">Libros</h2>
          </div>
        </Box>
      </div>
      <div className="pb-32 page-container">
        <div className="relative mx-auto mb-24 divide-y md:w-2/3 sm:w-full">
          {books.map(book => (
            <Link
              key={book.link}
              to={book.link}
              className="flex items-center justify-between p-4 mb-1 font-serif rounded-md hover:bg-gray-50 hover:shadow"
            >
              <span className="text-3xl text-gray-700">{book.title}</span>
              <span className="text-base text-gray-500">{book.author}</span>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
