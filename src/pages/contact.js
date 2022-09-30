import React from 'react';

import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact</h2>
      </header>
    </article>
    <section className="main">
      <form method="post" action="https://formspree.io/f/mvodweje">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="_replyto" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
        <input type="submit" value="Send" className="button special" /> &nbsp;
        <input type="reset" value="Clear" />
      </form>
    </section>
  </Layout>
);

export default ContactPage;
