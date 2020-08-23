import React from 'react';

import { Wrapper, Small, H2, H3, Image } from '../../../../styles';

import teamAle from '../../../../images/team-ale.svg';
import teamMao from '../../../../images/team-mao.svg';

const TeamBlockC = () => {
  return (
    <Wrapper column="1/13">
      <Wrapper mb="md">
        <H2 align="center" mb="sm">
          Conoce al equipo
        </H2>
      </Wrapper>
      <Wrapper columns="responsive" gap="sm" mb="md">
        <Wrapper bg="backgroundAlt" pt="md" pb="md">
          <Wrapper align="center" justify="center" justifyi="center" gap="sm">
            <Image
              width="75%"
              mdwidth="65%"
              src={teamAle}
              alt="Camera Icon"
              data-sal-duration="1000"
              data-sal-delay="100"
              data-sal="zoom-in"
              data-sal-easing="ease-out-bounce"
            />
            <H3 align="center">Alejandro Sánchez</H3>
            <Small>Co-fundador y CEO</Small>
          </Wrapper>
        </Wrapper>
        <Wrapper bg="backgroundAlt" pt="md" pb="md">
          <Wrapper align="center" justify="center" justifyi="center" gap="sm">
            <Image
              width="75%"
              mdwidth="65%"
              src={teamMao}
              alt="Device Icon"
              data-sal-duration="1000"
              data-sal-delay="100"
              data-sal="zoom-in"
              data-sal-easing="ease-out-bounce"
            />
            <H3 align="center">Mauricio Sánchez</H3>
            <Small>Co-fundador y COO</Small>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default TeamBlockC;
