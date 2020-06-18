import React from 'react';

import DesBlockC from './components/DesBlockC';
import DesImageC from './components/DesImageC';

import { Section, Container } from '../../../styles';

const Des = () => {
  return (
    <Section mb="section">
      <Container box="fullBox" pt="md" pb="md">
        <DesImageC />
        <DesBlockC />
      </Container>
    </Section>
  );
};

export default Des;
