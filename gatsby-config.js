/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Casamento Priscila & Celso`,
    description: `Casamento Priscila & Celso | Todos os lugares que estive durante minha vida, me levaram até você…`,
    author: `Celso Fabri Junior`,
    siteUrl: `https://priscilaecelso.com`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: "OhHLk8PiunfsccpMwzamwzaCPvAA0f0tskhYWoWEoZk",
        spaceId: "bz9d56pnav45",
        downloadLocal: true
      }
    }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/images/icon.png"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-68HV9H4CZG"
        ]
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-sitemap"
  ],
  pathPrefix: '/'
};