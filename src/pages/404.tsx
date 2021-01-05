import * as React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../component/Page/PageLayout';

const notFound = require('../images/undraw/page_not_found.svg')

export default () => (
  <PageLayout>
    <Helmet title={'peronia.org'} ></Helmet>
    {/* <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    <div className="hero">
      <img src={notFound} width="1074" height="584" className="w-1/2 h-auto" />
    </div>
  </PageLayout>
);
