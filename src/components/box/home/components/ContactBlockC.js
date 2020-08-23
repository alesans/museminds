import React from 'react';

import { Wrapper, H2, P, Btn } from '../../../../styles';

const ContactBlockC = () => {
  return (
    <Wrapper column="1/13">
      <Wrapper columns="gridTwo" gap="lg" justifyi="center" align="center">
        <Wrapper>
          <H2 mb="sm">Comencemos a crear</H2>
          <P>Te ayudaremos a desarrollar la mejor solución.</P>
        </Wrapper>
        <Wrapper>
          <Btn to="/contacto" padding="lg">
            Contáctanos
          </Btn>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ContactBlockC;
