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
            Development
          </H3>
          <P>We craft digital products with the latest skills.</P>
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
            UI/UX Design
          </H3>
          <P>We build robust products that improve usability.</P>
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
            Branding
          </H3>
          <P>We build a strategy around your needs.</P>
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
            Digital Strategy
          </H3>
          <P>We colaborate with your business goals.</P>
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
            Post-production
          </H3>
          <P>We craft video content for your users.</P>
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
            Audio production
          </H3>
          <P>We create sound experiences suitable for your brand.</P>
        </Wrapper>
      </Wrapper>
      <Wrapper justify="center" justifyi="center">
        <Btn to="/services" padding="sm">
          More information
        </Btn>
      </Wrapper>
    </Wrapper>
  );
};

export default ServiceValues;
