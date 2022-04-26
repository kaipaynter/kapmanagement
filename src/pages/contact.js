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
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="_replyto" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit" className="button special">
          Send
        </button>
        <input type="reset" value="Clear" />
      </form>
    </section>
  </Layout>
);

export default ContactPage;