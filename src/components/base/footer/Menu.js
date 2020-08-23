import React from 'react';

import { Wrapper, GLink, Ul, Li, H4 } from '../../../styles';

const Menu = () => {
  return (
    <Wrapper alignc="start">
      <H4 mb="sm">Menú</H4>
      <Ul columns="gridTwo" gap="sm">
        <Li>
          <GLink
            to="/compania"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Compañía
          </GLink>
        </Li>
        <Li>
          <GLink
            to="/servicios"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Servicios
          </GLink>
        </Li>
        <Li>
          <GLink
            to="/proyectos"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Proyectos
          </GLink>
        </Li>
        <Li>
          <GLink to="/contacto" fontWeight="medium">
            Contacto
          </GLink>
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Menu;
