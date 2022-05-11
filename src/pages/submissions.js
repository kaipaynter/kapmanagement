import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout';

const SubmissionsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Unsolicited Submissions Policy</h2>
      </header>
      <span className="image fit">
        <StaticImage
          src="../assets/images/Submissions_Policy.jpeg"
          alt="KAP Management"
          placeholder="blurred"
          objectFit="contain"
        />
      </span>
    </article>
  </Layout>
);

export default SubmissionsPage;