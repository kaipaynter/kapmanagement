import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        
      </div>
      
    </section>

    
  </Layout>
);

export default IndexPage;
