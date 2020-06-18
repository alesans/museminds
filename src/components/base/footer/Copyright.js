import React from 'react';

import { Wrapper, GLink, Ul, Li } from '../../../styles';

const Navbar = () => {
  return (
    <Wrapper column="1/-1" alignc="center" justify="center">
      <Ul gap="sm">
        <Li>
          <GLink size="xs" color="body" to="/">
            © MuseMinds {new Date().getFullYear()}. All Rights Reserved.
          </GLink>
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Navbar;
