import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const DigitalBlockC = () => {
  return (
    <Wrapper lgorder="1" column="8 / 12" lg="2 / 12" align="center" order="1">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Services</Small>
          <H2>Digital Strategy</H2>
        </Wrapper>
        <Wrapper>
          <P>
            Application of digital technologies to business models to form new differentiating business capabilities. It
            sets out the direction an organization will take to create new competitive advantages.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default DigitalBlockC;
