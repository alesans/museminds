import React from 'react';

import { Wrapper, GLink, Ul, Li, H4 } from '../../../styles';

const Menu = () => {
  return (
    <Wrapper alignc="start">
      <H4 mb="sm">Menu</H4>
      <Ul columns="gridTwo" gap="sm">
        <Li>
          <GLink
            to="/company"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Company
          </GLink>
        </Li>
        <Li>
          <GLink
            to="/services"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Services
          </GLink>
        </Li>
        <Li>
          <GLink
            to="/work"
            fontWeight="medium"
            activeStyle={{
              color: 'rgba(90, 36, 178)',
            }}
          >
            Work
          </GLink>
        </Li>
        <Li>
          <GLink to="/contact" fontWeight="medium">
            Hire us
          </GLink>
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Menu;
