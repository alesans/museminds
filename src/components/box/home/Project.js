import React from 'react';

import ProjectBlockC from './components/ProjectBlockC';

import { Section, Container } from '../../../styles';

const Product = () => {
  return (
    <Section mb="section">
      <Container box="fullBox">
        <ProjectBlockC />
      </Container>
    </Section>
  );
};

export default Product;
