const siteMetadata ={
    title: `NPB Dev Blog`,
    description: `Developer blog`,
}

module.exports = {
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