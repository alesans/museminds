import React from 'react';

import logo from '../../../images/logo.svg';
import { Wrapper, LogoLink, Image } from '../../../styles';

const Logo = () => {
  return (
    <Wrapper column="1 / 3" xl="1 / 4" align="center">
      <LogoLink to="/">
        <Image width="90%" src={logo} alt="MuseMinds logo" />
      </LogoLink>
    </Wrapper>
  );
};

export default Logo;
