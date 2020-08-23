import React from 'react';

import enus from '../../../images/enUS.svg';
import { Wrapper, Anchor, LocaleImage } from '../../../styles';

const Logo = () => {
  return (
    <Wrapper column="3 / 4" xl="4 / 6" align="center">
      <Anchor color="body" colorh="primary" href="https://www.museminds.com/">
        <LocaleImage src={enus} alt="Locale" />
        EN
      </Anchor>
    </Wrapper>
  );
};

export default Logo;
