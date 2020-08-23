import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const DevBlockC = () => {
  return (
    <Wrapper column="2 / 6" lg="2/12" align="center">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Servicios</Small>
          <H2>Desarrollo Web</H2>
        </Wrapper>
        <Wrapper>
          <P>
            Diseño y desarrollo de soluciones web ricas en interacción, funcionales, accesibles, fáciles de comprender y
            basarse en los estándares web. Creación del concepto de sitio web. y seguimiento directo con nuestro
            clientes para decisiones que son importantes para sus necesidades.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default DevBlockC;
