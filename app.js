const path      = require('path');
const express   = require('express');
const http      = require('http');
const httpProxy = require('http-proxy');
const React     = require('react');
const ReactDOM  = require('react-dom/server');

const IS_PRODUCTION = process.env.ENVIRONMENT === 'production';

const port = process.env.PORT || 5000;
const proxyPort = 8099;

const app = express();

const options = {
  router: {
    'localhost': '127.0.0.1:5000',
    'app.rickbergmann.com': '127.0.0.1:5000',
  }
};

const proxyServer = httpProxy.createServer(options);

app.set('build', `./build`);
app.use(express.static(`./build`));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
  const output = ReactDOM.renderToString(React.createFactory('index.html'));

  res.render('index', {
    query: req.query,
    title: 'App Starter Kit',
    react: output,
  });
});

require('@babel/register')({
  presets: ['react', 'transform-react-jsx'],
});

app.listen(port);
proxyServer.listen(proxyPort);

console.log(`server started on port ${port}`);
console.log(`Proxy listening on port ${proxyPort}`);