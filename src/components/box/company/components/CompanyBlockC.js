import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const CompanyBlockC = () => {
  return (
    <Wrapper column="2 / 7" lg="2/12" align="center">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Compañía</Small>
          <H2>Nuestra Misión</H2>
        </Wrapper>
        <Wrapper>
          <P>
            Somos un grupo de profesionales que desarrollamos productos de calidad para nuestros clientes con un enfoque
            humanista. Desde la concepción de MuseMinds, nos preocupamos por el desarrollo empresarial a través de un
            punto de vista humano y diversas áreas del pensamiento. Nuestro equipo multidisciplinario incluye
            desarrolladores web, diseñadores, psicólogos, músicos, expertos en negocios, pedagogos, artistas visuales y
            profesionales del marketing. El contacto con la gente es esencial, es por eso que MuseMinds para nosotros
            significa la necesidad de que la inspiración descienda, inspirando las mentes de nuestro gran equipo y
            desarrollando así productos de calidad.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default CompanyBlockC;
