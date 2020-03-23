const siteMetadata ={
    title: `NPB Dev Blog`,
    description: `Developer blog`,
}

module.exports = {
    siteMetadata: {
      title: `NPB Dev Blog`,
      description: `Developer blog`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/posts`,
          name: `posts`,
        },
      },
    ],
  };