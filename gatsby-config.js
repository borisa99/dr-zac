const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_APP_URL || 'http://localhost:8000',
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-image',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-brotli',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 72,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        resolveSiteUrl: () =>
          process.env.GATSBY_APP_URL || 'https://www.example.com',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/authors`,
        name: 'authors',
      },
    },
    {
      resolve: 'gatsby-remark-embed-video',
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 400, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
        loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
        urlOverrides: [
          {
            id: 'youtube',
            embedURL: (videoId) =>
              `https://www.youtube-nocookie.com/embed/${videoId}`,
          },
        ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
        iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname, ''),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-decap-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/Icons/,
        },
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
