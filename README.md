# Application with NextJS + material-ui + material-kit-react


Start the application locally
```
npm install
npm run dev
```

Build the application
```
npm run build
```

Run compiled version locally with `http-server` server
```
http-server out
```

Static deployment in `gh-pages`
```
npm run build
npm run export
npm run pages:deploy
# and create a `.nojekyll` file directly into your gh-pages branch
```
