import React from 'react';

import escr from '../../../images/esCR.svg';
import { Wrapper, Anchor, LocaleImage } from '../../../styles';

const Logo = () => {
  return (
    <Wrapper column="3 / 4" md="9 / 10" align="center">
      <Anchor color="body" colorh="primary" href="https://www.es.museminds.com/">
        <LocaleImage src={escr} alt="Locale" />
        ES
      </Anchor>
    </Wrapper>
  );
};

export default Logo;
