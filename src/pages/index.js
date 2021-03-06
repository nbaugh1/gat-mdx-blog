import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { H3 } from '../components/page-elements/h3';
import { H5 } from '../components/page-elements/h5';
import { P } from '../components/page-elements/p';
import Dump from '../components/Dump'

const IndexWrapper = styled.main`
`;

const PostWrapper = styled.div`
    
`;

const Image = styled(Img)`
  
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
    authorName
  } = useSiteMetadata();

  
  return (
    <>
      <SEO
        title={title}
        author={authorName}
        description={description || `nothin’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <IndexWrapper>
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            
            <PostWrapper key={id}>
            <div className="post">
              <Link to={fields.slug}
                  style={{textDecoration: 'none'}}>
                {!!frontmatter.cover ? (
                  <Image
                    fluid={frontmatter.cover.childImageSharp.fluid}
                  />
                ) : null}
                <H3>{frontmatter.title}</H3>
                <P className="subtitle">{frontmatter.date}</P>
                </Link>
                <P>{excerpt}</P>
              </div>
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
              fluid{
                ...GatsbyImageSharpFluid
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