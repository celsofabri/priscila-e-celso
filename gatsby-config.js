/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Casamento Priscila & Celso`,
    description: `Site de casamento de Priscila & Celso`,
    author: `Celso Fabri Junior`
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
        "icon": "src/images/icon.png"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
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
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-sitemap"
  ]
};