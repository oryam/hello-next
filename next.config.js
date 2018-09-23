// const path = require('path');
// const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
// const withOptimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withCSS(withSass(withImages({
      cssModules: true,
      serverRuntimeConfig: {},
      publicRuntimeConfig: {
        // Will be available on both server and client
        // appContext: isProd ? '/hello-next/' : '/', // for gh-pages
        appContext: '/',
      },
      // assetPrefix: isProd ? '/hello-next' : '', // for gh-pages
      exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
          // '/posts': { page: '/posts' },
          // '/login': { page: '/views/LoginPage' },
          '/p/975': { page: '/post', query: { id: 975 } },
          '/p/504': { page: '/post', query: { id: 504 } }
        };
      },
      // webpack: (config, { dev, isServer }) => {
      //   // for (let plugin of config.plugins) {
      //   //   console.log('plugin', plugin.constructor.name);
      //   // }
      //   if (!isServer) {
      //     config.plugins.push(
      //       new webpack.optimize.AggressiveSplittingPlugin({
      //         // minSize: 30000,
      //         maxSize: 50000
      //       })
      //       // new webpack.DefinePlugin({
      //       //   'process.env.NODE_ENV': JSON.stringify('production')
      //       // })
      //     );
      //   }

      //   config.recordsOutputPath = path.join(__dirname, "out", "records.json");

      //   return config;
      // }
    })
  )
);
