import React from 'react';

import Layout from '../components/base/Layout';
import SEO from '../components/base/Seo';
import Hero from '../components/box/company/Hero';
import Company from '../components/box/company/Company';
import Team from '../components/box/company/Team';
import Contact from '../components/box/home/Contact';

import { Scroll, Main } from '../styles';

const CompanyPage = () => (
  <Layout>
    <SEO title="Compañía" />
    <Main>
      <Hero />
      <Scroll id="scroll" />
      <Company />
      <Team />
      <Contact />
    </Main>
  </Layout>
);

export default CompanyPage;
