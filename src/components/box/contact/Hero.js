import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HeroBlockC from './components/HeroBlockC';

import { Section, Container } from '../../../styles';

const Hero = () => {
  //Images
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "backgrounds/contact-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 85) {
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
      mb="section"
      style={{
        backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(14, 21, 58, 0.9) 100%,
                      rgba(14, 21, 58, 0.9) 100%,
                      rgba(14, 21, 58, 0.9) 100%),url(${data.first.childImageSharp.fluid.src})`,
      }}
      bgs="cover"
      bgp="bottom"
      bgr="noRepeat"
    >
      <Container box="fullBox">
        <HeroBlockC />
      </Container>
    </Section>
  );
};

export default Hero;
