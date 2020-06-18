import React from 'react';

import TeamBlockC from './components/TeamBlockC';

import { Section, Container } from '../../../styles';

const Team = () => {
  return (
    <Section mb="section">
      <Container box="fullBox">
        <TeamBlockC />
      </Container>
    </Section>
  );
};

export default Team;
