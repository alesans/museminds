import React from 'react';

import Layout from '../components/base/Layout';
import SEO from '../components/base/Seo';
import Hero from '../components/box/home/Hero';
import Service from '../components/box/home/Service';
import Project from '../components/box/home/Project';
import Contact from '../components/box/home/Contact';

import { Scroll, Main } from '../styles';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Main>
      <Hero />
      <Scroll id="scroll" />
      <Service />
      <Project />
      <Contact />
    </Main>
  </Layout>
);

export default IndexPage;
