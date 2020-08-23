import React from 'react';

import { Wrapper, Ul, Li, H4, ServicesFooterIcon } from '../../../styles';

const Navbar = () => {
  return (
    <Wrapper alignc="start">
      <H4 mb="sm">Servicios</H4>
      <Ul gap="sm">
        <Li>
          <ServicesFooterIcon />
          Desarrollo
        </Li>
        <Li>
          <ServicesFooterIcon />
          Diseño
        </Li>
        <Li>
          <ServicesFooterIcon />
          Mercadeo
        </Li>
        <Li>
          <ServicesFooterIcon />
          Producción
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Navbar;
