import React from 'react';

import { Wrapper, H2, P, Btn } from '../../../../styles';

const ContactBlockC = () => {
  return (
    <Wrapper column="1/13">
      <Wrapper columns="gridTwo" gap="lg" justifyi="center" align="center">
        <Wrapper>
          <H2 mb="sm">Let's start creating</H2>
          <P>We will help you grow and develop the best solution</P>
        </Wrapper>
        <Wrapper>
          <Btn to="/contact" padding="lg">
            Contact us
          </Btn>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ContactBlockC;
