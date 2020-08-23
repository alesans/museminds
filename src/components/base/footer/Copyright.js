import React from 'react';

import { Wrapper, GLink, Ul, Li } from '../../../styles';

const Navbar = () => {
  return (
    <Wrapper column="1/-1" alignc="center" justify="center">
      <Ul gap="sm">
        <Li>
          <GLink size="xs" fontWeight="medium" color="body" to="/">
            © MuseMinds {new Date().getFullYear()}. Todos los derechos reservados.
          </GLink>
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Navbar;
