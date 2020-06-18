import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/base/Layout';
import SEO from '../../components/base/Seo';
import Contact from '../../components/box/home/Contact';

import {
  Main,
  Image,
  Section,
  Container,
  Wrapper,
  IconMotion,
  ViewMore,
  PH1,
  H4,
  P,
  Small,
  Ul,
  Li,
  InnerHtml,
} from '../../styles';

export const query = graphql`
  query CaseTemplate($id: String!) {
    contentfulWork(id: { eq: $id }) {
      title
      date
      id
      slug
      client {
        title
        id
      }
      category {
        id
        title
      }
      service {
        id
        title
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      seoTitle
      seoDescription
      seoAuthor
      seoKeywords
      seoImage {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredImage {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyContentfulFluid
          src
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
`;

const product = (props) => {
  const workContent = props.data.contentfulWork;

  return (
    <Layout>
      <SEO
        title={workContent.seoTitle}
        description={workContent.seoDescription}
        keywords={workContent.seoKeywords}
        authorName={workContent.seoAuthor}
      />
      <Main>
        {/* Dynamic Data */}
        <Section
          bg="backgroundAlt"
          pt="lg"
          align="center"
          height="100vh"
          mb="section"
          style={{
            backgroundImage: `linear-gradient(
                      to bottom right,
                      rgba(31, 32, 65, 0.85) 20%,
                      rgba(31, 32, 65, 0.85) 100%),url(${workContent.featuredImage.fluid.src})`,
          }}
          bgs="cover"
          bgp="bottom"
          bgr="noRepeat"
        >
          <Container box="fullBox">
            <Wrapper
              column="2 / 12"
              lg="2 / 12"
              mb="md"
              align="center"
              data-sal-duration="1200"
              data-sal-delay="100"
              data-sal="slide-up"
              data-sal-easing="ease-out-bounce"
            >
              <Wrapper
                mb="md"
                data-sal-duration="1200"
                data-sal-delay="300"
                data-sal="slide-up"
                data-sal-easing="ease-out-bounce"
              >
                <Small color="light" align="left">
                  Case Study
                </Small>
                <PH1 width="60rem" color="light" mb="sm">
                  {workContent.title}
                </PH1>
                <Ul columns="repeat(6,max-content)" colmd="gridThree" gap="sm">
                  {workContent.category.map((category) => (
                    <Li size="sm" color="light" key={category.id}>
                      {category.title}
                    </Li>
                  ))}
                </Ul>
              </Wrapper>
              <IconMotion
                // onClick={() => scrollTo('#down')}
                initial={{ opacity: 0.4, y: 2 }}
                animate={{ opacity: 0.8, y: -1 }}
                transition={{ duration: 1, yoyo: Infinity, ease: 'easeInOut' }}
              >
                <ViewMore />
              </IconMotion>
            </Wrapper>
          </Container>
        </Section>
        <Section pb="md" pt="md">
          <Container box="fullBox">
            <Wrapper column="2/6" md="1/-1" gap="sm">
              <Wrapper>
                <H4 mb="base">Project</H4>
                <H4 size="md" width="30rem">
                  {workContent.title}
                </H4>
              </Wrapper>
              <Wrapper>
                <H4 mb="base">Services</H4>
                <Ul>
                  {workContent.service.map((service) => (
                    <Li mb="base" key={service.id}>
                      {service.title}{' '}
                    </Li>
                  ))}
                </Ul>
              </Wrapper>
              <Wrapper>
                <H4 mb="base">Client</H4>
                <P>{workContent.client.title}</P>
              </Wrapper>
              <Wrapper>
                <H4 mb="base">Year</H4>
                <P>{workContent.date}</P>
              </Wrapper>
            </Wrapper>
            <Wrapper column="6/12" md="1/-1">
              <InnerHtml dangerouslySetInnerHTML={{ __html: `${workContent.content.childMarkdownRemark.html}` }} />
            </Wrapper>
            <Wrapper column="1/-1">
              {workContent.gallery.map((image) => (
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
            </Wrapper>
          </Container>
        </Section>
        <Contact />
        {/* Dynamic Data */}
      </Main>
    </Layout>
  );
};

export default product;
