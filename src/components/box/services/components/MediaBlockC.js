import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const MediaBlockC = () => {
  return (
    <Wrapper column="2 / 6" lg="2/12" align="center">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Servicios</Small>
          <H2>Postproducción de video</H2>
        </Wrapper>
        <Wrapper>
          <P>Elaboración de material audiovisual a partir del material grabado, que será presentado al público.</P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default MediaBlockC;
