import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
// import Dump from '../components/Dump'

const IndexWrapper = styled.main`
`;

const PostWrapper = styled.div`
    padding: 5px;
    margin: 5px;
    max-width: 700px;
`;

const Image = styled(Img)`
  border-radius: 5px;
`;

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  
  return (
    <>
      <SEO
        title={title}
        description={description || `nothin’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <IndexWrapper>
        {/* <Dump data={data}></Dump> */}
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            
            <PostWrapper key={id}>
              <Link to={fields.slug}
                  style={{textDecoration: 'none'}}>
                {!!frontmatter.cover ? (
                  <Image
                    fluid={frontmatter.cover.childImageSharp.fluid}
                  />
                ) : null}
                <h1>{frontmatter.title}</h1>
                <h5>{frontmatter.date}</h5>
                </Link>
                <p>{excerpt}</p>
              
            </PostWrapper>
          )
        )}
      </IndexWrapper>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;