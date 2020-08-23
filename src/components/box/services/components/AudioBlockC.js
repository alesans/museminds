import React from 'react';

import { Wrapper, H2, P, Small } from '../../../../styles';

const AudioBlockC = () => {
  return (
    <Wrapper lgorder="1" column="8 / 12" lg="2 / 12" align="center" order="1">
      <Wrapper mt="sm" mb="sm">
        <Wrapper mb="sm">
          <Small align="left">Servicios</Small>
          <H2>Producción de música y audio</H2>
        </Wrapper>
        <Wrapper>
          <P>
            Desarrollo de productos sonoros mediante la creación de la obra, composiciones musicales mediante grabación,
            sistemas de mezcla y masterización. Canción de un jingle con fines promocionales, marca de audio para un
            producto, servicio o marca, o música instrumental.
          </P>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default AudioBlockC;
