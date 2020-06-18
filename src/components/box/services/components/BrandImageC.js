import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper, ImageContainer, ImageCardWrapper, ImageCard } from '../../../../styles';

const DevImageC = () => {
  //Images
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "services-branding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 85) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  //Images End
  return (
    <Wrapper column="7 / 12" lg="1 / -1" align="center" pl="sm" pr="sm">
      <ImageContainer>
        <ImageCardWrapper>
          <ImageCard className="image-card" fluid={data.image.childImageSharp.fluid} alt="Nuestra misión" />
        </ImageCardWrapper>
      </ImageContainer>
    </Wrapper>
  );
};

export default DevImageC;
