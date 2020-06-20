require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  title: `Museminds - We craft creative solutions`,
  keywords: `web developer costa rica, desarrollador web costa rica, diseñador web, website designer, frontend developer, frontend masters`,
  description: `We’re a design and development agency that specialize in simple, useful and beautiful solutions`,
  image: `${__dirname}/src/images/favicon.png`,
  siteUrl: `https://www.museminds.com`,
  siteLanguage: `en-US`,
  siteLocale: `en-US`,
  twitterUsername: `@museminds`,
  author: `museminds`,
  favicon: `${__dirname}/src/images/favicon.png`,
  backgroundColor: `#FFFFFF`,
  themeColor: `#202D44`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/dev-404-page`, `/404`, `/404.html`, `/blog.html`, `/blog`],
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.museminds.com',
        sitemap: 'https://www.museminds.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-170147209-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cache`,
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `museminds`,
        short_name: `museminds`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#202D44`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto Sans HK\:200,300,400,500,600,700,800`],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        disable: false,
        selector: '[data-sal]',
        animateClassName: 'sal-animate',
        disabledClassName: 'sal-disabled',
        rootMargin: '0% 50%',
        enterEventName: 'sal:in',
        exitEventName: 'sal:out',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
