import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper, ImageContainer, ImageCardWrapper, ImageCard } from '../../../../styles';

const CompanyImageC = () => {
  //Images
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "company-about.jpg" }) {
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
          <ImageCard
            className="image-card"
            fluid={data.image.childImageSharp.fluid}
            alt="Image about our company culture"
          />
        </ImageCardWrapper>
      </ImageContainer>
    </Wrapper>
  );
};

export default CompanyImageC;
