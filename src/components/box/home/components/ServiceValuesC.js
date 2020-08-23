import React from 'react';

import {
  Wrapper,
  H3,
  P,
  Btn,
  ServiceIconValues1,
  ServiceIconValues2,
  ServiceIconValues3,
  ServiceIconValues4,
  ServiceIconValues5,
  ServiceIconValues6,
} from '../../../../styles';

const ServiceValues = () => {
  return (
    <Wrapper column="3/11" md="1/13" align="start" justify="center">
      <Wrapper columns="gridThree" gap="md" mb="md" align="start">
        <Wrapper
          bg="backgroundAlt"
          pt="sm"
          pb="sm"
          pr="sm"
          pl="sm"
          shadow="card"
          htransform="scale(1.04)"
          transition=".3s"
        >
          <ServiceIconValues1
            data-sal-duration="1200"
            data-sal-delay="100"
            data-sal="zoom-in"
            data-sal-easing="ease-out-bounce"
          />
          <H3 align="center" mb="sm">
            Desarrollo
          </H3>
          <P>Creamos productos con las últimas tecnologías.</P>
        </Wrapper>
        <Wrapper
          bg="backgroundAlt"
          pt="sm"
          pb="sm"
          pr="sm"
          pl="sm"
          shadow="card"
          htransform="scale(1.04)"
          transition=".3s"
        >
          <ServiceIconValues2
            data-sal-duration="1200"
            data-sal-delay="100"
            data-sal="zoom-in"
            data-sal-easing="ease-out-bounce"
          />
          <H3 align="center" mb="sm">
            Diseño UI/UX
          </H3>
          <P>Creamos productos enfocados en usabilidad.</P>
        </Wrapper>
        <Wrapper
          bg="backgroundAlt"
          pt="sm"
          pb="sm"
          pr="sm"
          pl="sm"
          shadow="card"
          htransform="scale(1.04)"
          transition=".3s"
        >
          <ServiceIconValues3
            data-sal-duration="1200"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-easing="ease-out-bounce"
          />
          <H3 align="center" mb="sm">
            Marca
          </H3>
          <P>Construimos en torno a tus necesidades.</P>
        </Wrapper>
        <Wrapper
          bg="backgroundAlt"
          pt="sm"
          pb="sm"
          pr="sm"
          pl="sm"
          shadow="card"
          htransform="scale(1.04)"
          transition=".3s"
        >
          <ServiceIconValues4
            data-sal-duration="1200"
            data-sal-delay="100"
            data-sal="zoom-in"
            data-sal-easing="ease-out-bounce"
          />
          <H3 align="center" mb="sm">
            Estrategia Digital
          </H3>
          <P>Colaboramos con tus objetivos comerciales.</P>
        </Wrapper>
        <Wrapper
          bg="backgroundAlt"
          pt="sm"
          pb="sm"
          pr="sm"
          pl="sm"
          shadow="card"
          htransform="scale(1.04)"
          transition=".3s"
        >
          <ServiceIconValues5
            data-sal-duration="1200"
            data-sal-delay="100"
            data-sal="zoom-in"
            data-sal-easing="ease-out-bounce"
          />
          <H3 align="center" mb="sm">
            Post-producción
          </H3>
          <P>Creamos contenido de video para tus usuarios.</P>
        </Wrapper>
        <Wrapper
          bg="backgroundAlt"
          pt="sm"
          pb="sm"
          pr="sm"
          pl="sm"
          shadow="card"
          htransform="scale(1.04)"
          transition=".3s"
        >
          <ServiceIconValues6
            data-sal-duration="1200"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-easing="ease-out-bounce"
          />
          <H3 align="center" mb="sm">
            Audio
          </H3>
          <P>Creamos el sonido adecuado para tu marca.</P>
        </Wrapper>
      </Wrapper>
      <Wrapper justify="center" justifyi="center">
        <Btn to="/services" padding="sm">
          Más información
        </Btn>
      </Wrapper>
    </Wrapper>
  );
};

export default ServiceValues;
