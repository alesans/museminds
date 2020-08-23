import React from 'react';
import { graphql, StaticQuery, navigate } from 'gatsby';

import {
  Wrapper,
  Small,
  SmallHover,
  SmallHoverIcon,
  H2,
  H3,
  P,
  Btn,
  ImageCardContainer,
  ImageCardWrapper,
  ImageContent,
  CImageCard,
} from '../../../../styles';

export default () => (
  <StaticQuery
    query={graphql`
      query HomeWorkQuery {
        allContentfulWork(
          limit: 4
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "es-CR" }, home: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              title
              date
              client {
                title
                id
              }
              category {
                title
                id
              }
              featuredImage {
                fluid(maxWidth: 2000, quality: 100) {
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
      <Wrapper column="2/12">
        <Wrapper mb="md" justify="center">
          <H2 align="center" mb="sm">
            Nuestros Proyectos
          </H2>
          <P>Desarrollamos soluciones tecnológicas innovadoras para empresas</P>
        </Wrapper>
        <Wrapper columns="gridThree" gap="sm" mb="md" pl="base" pr="base">
          {data.allContentfulWork.edges.map((edge) => (
            <ImageCardContainer
              key={edge.node.id}
              tabIndex={edge.node.id}
              role="button"
              onClick={() => navigate(`/proyectos/${edge.node.slug}`)}
            >
              <ImageCardWrapper>
                <CImageCard className="image-card" src={edge.node.featuredImage.fluid.src} alt={edge.node.title} />
              </ImageCardWrapper>
              <ImageContent
                data-sal-duration="500"
                data-sal-delay="100"
                data-sal="slide-right"
                data-sal-easing="ease-out-bounce"
              >
                <Wrapper mb="base">
                  <Small align="left" color="grayAlt">
                    {edge.node.date}
                  </Small>
                  <Small align="left" color="light">
                    {edge.node.client.title}
                  </Small>
                </Wrapper>
                <H3 mb="sm" width="25rem" color="light">
                  {edge.node.title}
                </H3>
                <SmallHover align="left" color="light" className="image-btn">
                  Ver Caso de Estudio
                  <SmallHoverIcon />
                </SmallHover>
              </ImageContent>
            </ImageCardContainer>
          ))}
        </Wrapper>
        <Wrapper justify="center" justifyi="center">
          <Btn to="/proyectos" padding="sm">
            Mostrar todos
          </Btn>
        </Wrapper>
      </Wrapper>
    )}
  />
);
