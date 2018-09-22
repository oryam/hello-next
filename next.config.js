const withImages = require('next-images');
module.exports = withImages({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/975': { page: '/post', query: { id: 975 } },
      '/p/504': { page: '/post', query: { id: 504 } }
    };
  }
});
