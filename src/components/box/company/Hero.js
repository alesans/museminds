import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HeroBlockC from './components/HeroBlockC';

import { Section, Container } from '../../../styles';

const Hero = () => {
  //Images
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "backgrounds/company-bg.jpg" }) {
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
      bg="body"
      pt="lg"
      align="center"
      style={{
        backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(14, 21, 58, 0.8) 100%,
                      rgba(14, 21, 58, 0.8) 100%,
                      rgba(14, 21, 58, 0.8) 100%),url(${data.first.childImageSharp.fluid.src})`,
      }}
      bgs="cover"
      bgp="center"
      bgr="noRepeat"
    >
      <Container box="fullBox">
        <HeroBlockC />
      </Container>
    </Section>
  );
};

export default Hero;
