import React from 'react';

import Layout from '../components/base/Layout';
import SEO from '../components/base/Seo';
import Hero from '../components/box/services/Hero';
import Dev from '../components/box/services/Dev';
import Des from '../components/box/services/Des';
import Brand from '../components/box/services/Brand';
import Digital from '../components/box/services/Digital';
import Media from '../components/box/services/Media';
import Audio from '../components/box/services/Audio';
import Contact from '../components/box/home/Contact';

import { Scroll, Main } from '../styles';

const ServicePage = () => (
  <Layout>
    <SEO title="Services" />
    <Main>
      <Hero />
      <Scroll id="scroll" />
      <Dev />
      <Des />
      <Brand />
      <Digital />
      <Media />
      <Audio />
      <Contact />
    </Main>
  </Layout>
);

export default ServicePage;
