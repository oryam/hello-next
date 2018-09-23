const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withCSS(
  withSass(
    withImages({
      cssModules: true,
      serverRuntimeConfig: {},
      publicRuntimeConfig: {
        // Will be available on both server and client
        // appContext: isProd ? '/hello-next/' : '/' // for gh-pages
        appContext: '/',
      },
      // assetPrefix: isProd ? '/hello-next' : '', // for gh-pages
      exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
          '/posts': { page: '/posts' },
          '/p/975': { page: '/post', query: { id: 975 } },
          '/p/504': { page: '/post', query: { id: 504 } },
          '/login': { page: '/login' },
          '/components': { page: '/components' }
        };
      }
    })
  )
);
