import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HeroBlockC from './components/HeroBlockC';

import { Section, Container } from '../../../styles';

const Hero = () => {
  //Images
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "backgrounds/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 85) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  //Images End
  return (
    <Section
      bg="backgroundAlt"
      pt="lg"
      align="center"
      height="100vh"
      mb="section"
      style={{
        backgroundImage: `linear-gradient(
                      to bottom right,
                      rgba(31, 32, 65, 0.65) 20%,
                      rgba(31, 32, 65, 0.65) 100%),url(${data.first.childImageSharp.fluid.src})`,
      }}
      bgs="cover"
      bgp="top"
      bgr="noRepeat"
    >
      <Container box="fullBox">
        <HeroBlockC />
      </Container>
    </Section>
  );
};

export default Hero;
