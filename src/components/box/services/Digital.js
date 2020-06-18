import React from 'react';

import DigitalBlockC from './components/DigitalBlockC';
import DigitalImageC from './components/DigitalImageC';

import { Section, Container } from '../../../styles';

const Digital = () => {
  return (
    <Section mb="section">
      <Container box="fullBox" pt="md" pb="md">
        <DigitalImageC />
        <DigitalBlockC />
      </Container>
    </Section>
  );
};

export default Digital;
