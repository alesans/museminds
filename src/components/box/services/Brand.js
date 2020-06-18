import React from 'react';

import BrandBlockC from './components/BrandBlockC';
import BrandImageC from './components/BrandImageC';

import { Section, Container } from '../../../styles';

const Brand = () => {
  return (
    <Section mb="section" bg="backgroundAlt">
      <Container box="fullBox" pt="md" pb="md">
        <BrandBlockC />
        <BrandImageC />
      </Container>
    </Section>
  );
};

export default Brand;
