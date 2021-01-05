import React from 'react';
import Link from 'gatsby-link';
import Twitter from '../Icon/Twitter';
import Github from '../Icon/Github';
import './PageLayout.css';
import Logo from '../Peronia/Logo';

export default function PageLayout(props: any) {
  return (
    <div className="PageLayout">
      <header className="w-full bg-white">
        <div className="flex items-center justify-between h-16 page-container">
          <div>
            <Logo />
          </div>
          <div className="flex">
            <Link
              to="https://github.com/peronia-org"
              className="ml-8 text-3xl text-gray-800"
            >
              <Github />
            </Link>
            <Link
              to="https://twitter.com/PeroniaOrg"
              className="ml-8 text-3xl text-gray-800"
            >
              <Twitter />
            </Link>
          </div>
        </div>
      </header>
      {props.children}
      <footer className="w-full border-t border-gray-100 shadow-md bg-gray-50">
        <div className="p-16 page-container" />
      </footer>
    </div>
  );
}
