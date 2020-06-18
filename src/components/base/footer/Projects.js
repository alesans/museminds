import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { Wrapper, GLink, Ul, Li, H4 } from '../../../styles';

export default () => (
  <StaticQuery
    query={graphql`
      query HomeFooterWorkQuery {
        allContentfulWork(
          limit: 8
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              title
              createdAt
              category {
                title
                id
                slug
              }
              featuredImage {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Wrapper alignc="start">
        <H4 mb="sm">Projects</H4>
        <Ul gap="sm">
          {data.allContentfulWork.edges.map((edge) => (
            <Li>
              <GLink color="body" to={`/productos/${edge.node.slug}`}>
                {edge.node.title}
              </GLink>
            </Li>
          ))}
        </Ul>
      </Wrapper>
    )}
  />
);
