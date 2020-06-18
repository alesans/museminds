import React from 'react';

import { Wrapper, Ul, Li, H4, ServicesFooterIcon } from '../../../styles';

const Navbar = () => {
  return (
    <Wrapper alignc="start">
      <H4 mb="sm">Services</H4>
      <Ul gap="sm">
        <Li>
          <ServicesFooterIcon />
          Development
        </Li>
        <Li>
          <ServicesFooterIcon />
          Design
        </Li>
        <Li>
          <ServicesFooterIcon />
          Marketing
        </Li>
        <Li>
          <ServicesFooterIcon />
          Production
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Navbar;
