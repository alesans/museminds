import React from 'react';

import MediaBlockC from './components/MediaBlockC';
import MediaImageC from './components/MediaImageC';

import { Section, Container } from '../../../styles';

const Media = () => {
  return (
    <Section bg="backgroundAlt">
      <Container box="fullBox" pt="md" pb="md">
        <MediaBlockC />
        <MediaImageC />
      </Container>
    </Section>
  );
};

export default Media;
