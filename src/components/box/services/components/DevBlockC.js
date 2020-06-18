import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const DevBlockC = () => {
  return (
    <Wrapper column="2 / 6" lg="2/12" align="center">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Services</Small>
          <H2>Web Development</H2>
        </Wrapper>
        <Wrapper>
          <P>
            Design and development of web solutions that are rich in interaction, functional, accessible, easy to
            understand and based on Web standards. Creation of the website concept. and direct follow-up with our
            clients for decisions that are important to their needs.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default DevBlockC;
