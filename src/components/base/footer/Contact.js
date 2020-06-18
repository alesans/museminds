import React from 'react';

import { Wrapper, Ul, Li, H4, ContactFooterIconOne, ContactFooterIconThree } from '../../../styles';

const Contact = () => {
  return (
    <Wrapper alignc="start">
      <H4 mb="sm">Contact</H4>
      <Ul gap="sm">
        <Li>
          <ContactFooterIconOne />
          info@museminds.com
        </Li>
        <Li>
          <ContactFooterIconThree />
          San José, Costa Rica
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Contact;
