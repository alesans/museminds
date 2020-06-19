import React from 'react';

import DevBlockC from './components/DevBlockC';
import DevImageC from './components/DevImageC';

import { Section, Container } from '../../../styles';

const Dev = () => {
  return (
    <Section bg="backgroundAlt">
      <Container box="fullBox" pt="section" pb="md">
        <DevBlockC />
        <DevImageC />
      </Container>
    </Section>
  );
};

export default Dev;
