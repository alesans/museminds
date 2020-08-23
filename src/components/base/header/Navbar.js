import React from 'react';

import { NWrapper, NavLink, NUl, Li, NavBtn } from '../../../styles';

const Navbar = ({ open }) => {
  return (
    <NWrapper column="8 / -1" xl="6 / -1" open={open}>
      <NUl>
        <Li>
          <NavLink
            to="/compania"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Compañía
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/servicios"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Servicios
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/proyectos"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Proyectos
          </NavLink>
        </Li>
        <Li>
          <NavBtn to="/contacto" fontWeight="medium">
            Contacto
          </NavBtn>
        </Li>
      </NUl>
    </NWrapper>
  );
};

export default Navbar;
