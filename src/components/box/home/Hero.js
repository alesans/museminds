import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import HeroBlockC from './components/HeroBlockC';
import HeroFeatured from './components/HeroFeatured';

import { Section, Container } from '../../../styles';

const Hero = () => {
  //Images
  // const data = useStaticQuery(graphql`
  //   query {
  //     first: file(relativePath: { eq: "backgrounds/graphic.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 3000, quality: 85) {
  //           aspectRatio
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  //Images End
  return (
    <Section
      bg="backgroundAlt"
      align="center"
      pt="section"
      pb="sm"
      mb="section"
      // height="100vh"
      // style={{
      //   backgroundImage: `linear-gradient(
      //                 to bottom right,
      //                 rgba(31, 32, 65, 0.1) 20%,
      //                 rgba(31, 32, 65, 0.1) 100%),url(${data.first.childImageSharp.fluid.src})`,
      // }}
      // bgs="cover"
      // bgp="top"
      // bgr="noRepeat"
    >
      <Container box="fullBox" gap="md">
        <HeroBlockC />
        <HeroFeatured />
      </Container>
    </Section>
  );
};

export default Hero;
