const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.all('*', (req, res) => {
      // Add assetPrefix support based on the hostname
      if (req.headers.host === 'oryam.github.io') {
        app.setAssetPrefix('https://oryam.github.io/hello-next');
      } else {
        app.setAssetPrefix('');
      }

      return handle(req, res);
    });

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    // server.get('/login', (req, res) => {
    //   app.render(req, res, '/views/LoginPage');
    // });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
