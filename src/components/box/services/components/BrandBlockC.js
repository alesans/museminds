import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const DevBlockC = () => {
  return (
    <Wrapper column="2 / 6" lg="2/12" align="center">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Servicios</Small>
          <H2>Branding</H2>
        </Wrapper>
        <Wrapper>
          <P>
            Generar relaciones y vínculos emocionales a largo plazo con los consumidores, y fidelizar su marca a la en
            la medida en que les proporciona un valor real en términos funcionales y emocionales.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default DevBlockC;
