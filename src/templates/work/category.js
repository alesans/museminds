import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';

import Layout from '../../components/base/Layout';
import SEO from '../../components/base/Seo';
// import Hero from '../../components/box/projects/Hero';
import Contact from '../../components/box/home/Contact';

import {
  Scroll,
  Main,
  Section,
  Container,
  Wrapper,
  SWrapper,
  H2,
  H3,
  Small,
  SmallHover,
  SmallHoverIcon,
  GLink,
  CatBtn,
  Btn,
  Ul,
  Li,
  ImageCardContainer,
  ImageCardWrapper,
  ImageContent,
  CImageCard,
  IconPreviousPage,
  IconNextPage,
  OptionsBtn,
  CloseCat,
  OpenCat,
} from '../../styles';

export const pageQuery = graphql`
  query WorkCategoryQuery($skip: Int!, $limit: Int!, $category: String) {
    allContentfulWork(
      sort: { fields: [createdAt], order: DESC }
      filter: { node_locale: { eq: "en-US" }, category: { elemMatch: { title: { eq: $category } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          title
          date
          createdAt
          client {
            title
            id
          }
          category {
            title
            id
          }
          featuredImage {
            fluid(maxWidth: 1500, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulCategory(
      limit: 9
      sort: { fields: [createdAt], order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`;

const Category = (props) => {
  const [open, setOpen] = useState(false);
  const WorkContent = props.data.allContentfulWork;
  const categoryContent = props.data.allContentfulCategory;
  const { currentPage, categoryPath, category, numPages } = props.pageContext;
  const pageNumber = currentPage;
  const pageTotal = numPages;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `${categoryPath}` : `${categoryPath}/${currentPage - 1}`;
  const nextPage = `${categoryPath}/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title={category} description={category} keywords={category} />
      <Main>
        {/* <Hero /> */}
        <Scroll id="scroll" />
        {/* Dynamic Data */}
        <Section position="relative" pt="section">
          <Container box="fullBox" pt="sm">
            <Wrapper column="11 / 13" justifyi="end" display="none" lgdisplay="block">
              <OptionsBtn open={open} onClick={() => setOpen(!open)}>
                {open ? <CloseCat /> : <OpenCat />}
              </OptionsBtn>
            </Wrapper>
            <SWrapper column="1/13" lg="1/13" alignc="start" justify="center" Z pr="md" pl="md" open={open}>
              <Wrapper mb="md">
                <H2 align="center">{category}</H2>
              </Wrapper>
              <Ul columns="gridFour" gap="sm">
                <Li>
                  <Btn
                    color="body"
                    fontWeight="medium"
                    bg="light"
                    width="100%"
                    shadow="card"
                    bgh="backgroundAlt"
                    colorh="body"
                    to="/work"
                  >
                    All
                  </Btn>
                </Li>
                {categoryContent.edges.map((edge) => (
                  <Li>
                    <CatBtn
                      color="body"
                      fontWeight="medium"
                      bg="light"
                      width="100%"
                      shadow="card"
                      bgh="backgroundAlt"
                      colorh="body"
                      key={edge.node.id}
                      tabIndex={edge.node.id}
                      role="button"
                      onClick={() => navigate(`/work/category/${edge.node.slug}`)}
                    >
                      {edge.node.title}
                    </CatBtn>
                  </Li>
                ))}
              </Ul>
            </SWrapper>
            <Wrapper column="2/12" lg="1/-1" pr="md" pt="lg" pb="lg" pl="md" rows="repeat(2,max-content)">
              <Wrapper columns="gridFour" gap="sm" mb="md" pl="base" pr="base">
                {WorkContent.edges.map((edge) => (
                  <ImageCardContainer
                    key={edge.node.id}
                    tabIndex={edge.node.id}
                    role="button"
                    onClick={() => navigate(`/work/${edge.node.slug}`)}
                  >
                    <ImageCardWrapper>
                      <CImageCard
                        className="image-card"
                        src={edge.node.featuredImage.fluid.src}
                        alt={edge.node.title}
                      />
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
                        View Case Study
                        <SmallHoverIcon />
                      </SmallHover>
                    </ImageContent>
                  </ImageCardContainer>
                ))}
              </Wrapper>
              <Wrapper
                justifyi="center"
                data-sal-duration="500"
                data-sal-delay="100"
                data-sal="slide-up"
                data-sal-easing="ease-out-bounce"
              >
                <Wrapper columns="gridThree" colmd="gridThree">
                  <Wrapper>
                    {!isFirst && (
                      <GLink to={prevPage}>
                        <IconPreviousPage />
                      </GLink>
                    )}
                  </Wrapper>
                  <Wrapper align="center" justify="center">
                    {pageNumber} / {pageTotal}
                  </Wrapper>
                  <Wrapper>
                    {!isLast && (
                      <GLink to={nextPage}>
                        <IconNextPage />
                      </GLink>
                    )}
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Container>
        </Section>
        {/* Dynamic Data */}
        <Contact />
      </Main>
    </Layout>
  );
};

export default Category;
