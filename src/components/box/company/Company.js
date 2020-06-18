import React from 'react';

import CompanyBlockC from './components/CompanyBlockC';
import CompanyImageC from './components/CompanyImageC';

import { Section, Container } from '../../../styles';

const Company = () => {
  return (
    <Section mb="section" bg="backgroundAlt">
      <Container box="fullBox" pt="section" pb="md">
        <CompanyBlockC />
        <CompanyImageC />
      </Container>
    </Section>
  );
};

export default Company;
