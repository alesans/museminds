import React from 'react';

import { NWrapper, NavLink, NUl, Li, NavBtn } from '../../../styles';

const Navbar = ({ open }) => {
  return (
    <NWrapper column="9 / -1" xl="6 / -1" open={open}>
      <NUl>
        <Li>
          <NavLink
            to="/company"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Company
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/services"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Services
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/work"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Work
          </NavLink>
        </Li>
        <Li>
          <NavBtn to="/contact" fontWeight="medium">
            Hire us
          </NavBtn>
        </Li>
      </NUl>
    </NWrapper>
  );
};

export default Navbar;
