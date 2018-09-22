const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withImages({
  assetPrefix: isProd ? '/hello-next' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/login': { page: '/views/LoginPage' },
      '/p/975': { page: '/post', query: { id: 975 } },
      '/p/504': { page: '/post', query: { id: 504 } }
    };
  }
});
