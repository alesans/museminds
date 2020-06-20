import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper, ImageContainer, ImageCardWrapper, ImageCard } from '../../../../styles';

const DigitalImageC = () => {
  //Images
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "services-strategy.jpg" }) {
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
    <Wrapper lgorder="2" column="2 / 7" lg="1 / -1" align="center" pl="sm" pr="sm">
      <ImageContainer>
        <ImageCardWrapper>
          <ImageCard className="image-card" fluid={data.image.childImageSharp.fluid} alt="Marketing strategy" />
        </ImageCardWrapper>
      </ImageContainer>
    </Wrapper>
  );
};

export default DigitalImageC;
