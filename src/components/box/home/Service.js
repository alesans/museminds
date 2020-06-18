import React from 'react';

import ServiceBlockC from './components/ServiceBlockC';
import ServiceValuesC from './components/ServiceValuesC';

import { Section, Container } from '../../../styles';

const Service = () => {
  return (
    <Section mb="section">
      <Container box="centerBox">
        <ServiceBlockC />
        <ServiceValuesC />
      </Container>
    </Section>
  );
};

export default Service;
