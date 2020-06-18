import React from 'react';

import FormBlockC from './components/FormBlockC';

import { Section, Container } from '../../../styles';

const Form = () => {
  return (
    <Section mb="section">
      <Container box="fullBox">
        <FormBlockC />
      </Container>
    </Section>
  );
};

export default Form;
