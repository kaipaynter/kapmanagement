import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About</h2>
      </header>
      <span className="image fit">
        <StaticImage
          src="../assets/images/KAP_Managment_3.5.jpg"
          alt="KAP Management"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default AboutPage;