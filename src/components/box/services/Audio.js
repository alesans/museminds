import React from 'react';

import AudioBlockC from './components/AudioBlockC';
import AudioImageC from './components/AudioImageC';

import { Section, Container } from '../../../styles';

const Audio = () => {
  return (
    <Section>
      <Container box="fullBox" pt="md" pb="md">
        <AudioImageC />
        <AudioBlockC />
      </Container>
    </Section>
  );
};

export default Audio;
