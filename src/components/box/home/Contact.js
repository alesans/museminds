import React from 'react';

import ContactBlockC from './components/ContactBlockC';

import { Section, Container } from '../../../styles';

const Device = () => {
  return (
    <Section
      bg="backgroundAlt"
      pt="lg"
      pb="lg"
      // bgurl="url('https://res.cloudinary.com/alesans-com/image/upload/v1591963930/iluminext/footer-pattern_miuyfq.jpg')"
      // bgs="cover"
      // bgp="center"
      // bgr="noRepeat"
    >
      <Container box="centerBox">
        <ContactBlockC />
      </Container>
    </Section>
  );
};

export default Device;
