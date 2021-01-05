import { Link } from 'gatsby';
import React from 'react';

export default function Logo() {
  return <Link to="/" className="block font-serif text-3xl text-center text-gray-800">
    peronia<sub className="italic text-gray-400">.org</sub>
  </Link>
}