import React from 'react';
import { graphql, StaticQuery, navigate } from 'gatsby';

import { Wrapper, Small, H3, SendBtn, Image } from '../../../../styles';

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedSliderWorkQuery {
        allContentfulWork(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              title
              client {
                title
                id
              }
              category {
                title
                id
              }
              featuredImage {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
              gallery {
                id
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyContentfulFluid
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Wrapper column="6 / 12" lg="2 / 10" mb="md" align="center" justify="center">
        {data.allContentfulWork.edges.map((edge) => (
          <Wrapper key={edge.node.id}>
            <Wrapper columns="gridTwo" gap="md" mdgap="sm">
              {edge.node.gallery.map((image) => (
                <Image
                  data-sal-duration="1200"
                  data-sal-delay="100"
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  key={image.id}
                  src={image.fluid.src}
                  alt={image.id}
                />
              ))}
              <Wrapper
                data-sal-duration="1200"
                data-sal-delay="500"
                data-sal="slide-right"
                data-sal-easing="ease-out-bounce"
                justify="center"
                align="start"
              >
                <Small align="left">{edge.node.client.title}</Small>
                <H3 width="30rem" mb="sm" size="lg">
                  {edge.node.title}
                </H3>
                <SendBtn onClick={() => navigate(`/work/${edge.node.slug}`)} padding="md">
                  View Case Study
                </SendBtn>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    )}
  />
);
