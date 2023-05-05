import React from 'react';

import Layout from '../components/Layout';

const SubmissionsPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
      </header>
      <p className='center'>
        Review our website to ensure that we are currently accepting submissions. We may close our submission window periodically, so please check back regularly.
      </p>
      <p className='center'>
        1. Prepare your submission materials, which should include a recent headshot, an updated resume, and a demo reel. Models and presenters please include your portfolio of work
      </p>
      <p className='center'>
        2. Complete our online submission form or send an email to our submissions email address with your materials attached. Please do not submit your materials via postal mail
      </p>
      <p className='center'>
        3. In your email or submission form, please include a brief cover letter introducing yourself and explaining why you are interested in our agency. Be sure to mention any referrals or connections you may have to our agency or the industry.
      </p>
      <p className='center'>
        4. Please allow up to 4-6 weeks for us to review your submission. If we are interested in pursuing representation, we will contact you to schedule a meeting or request additional materials
      </p>
    </article>
  </Layout>
);

export default SubmissionsPage;