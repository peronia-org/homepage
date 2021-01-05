module.exports = {
  siteMetadata: {
    title: `peronia.org`,
    description: ``,
    siteUrl: `https://peronia.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/books/monopolio-y-competencia`,
        name: `books`,
        ignore: ['*.gif'],
      },
    },

    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/static`,
    //     ignore: [ '!**/README.md' ]
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: ['README.md']
    //   }
    // },

    `gatsby-transformer-remark`,

    `gatsby-plugin-sitemap`,

    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Cormorant Garamond:ital,wght@0,300;0,400;0,700;1,400'],
      },
    },
  ],
};
