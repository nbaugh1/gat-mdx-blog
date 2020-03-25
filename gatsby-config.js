const siteMetadata = {
  title: `NPB Dev Blog`,
  description: `My developer's blog.`,
  image: `/default-site-image.jpg`, // goes in ./static
  siteUrl: `https://nbaugh1.github.io/blog`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@nbaugh1`,
  authorName: `Nick Baughman`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/posts`, name: `posts` },
    },
  ],
};