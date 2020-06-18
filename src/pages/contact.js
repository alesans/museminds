import React from 'react';

import Layout from '../components/base/Layout';
import SEO from '../components/base/Seo';
import Hero from '../components/box/contact/Hero';
import Form from '../components/box/contact/Form';

import { Scroll, Main } from '../styles';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Main>
      <Hero />
      <Form />
      <Scroll id="scroll" />
    </Main>
  </Layout>
);

export default ContactPage;
