const path      = require('path');
const express   = require('express');
const http      = require('http');
const httpProxy = require('http-proxy');
const React     = require('react');
const ReactDOM  = require('react-dom/server');

const port = process.env.PORT || 1001;
const app = express();

const IS_PRODUCTION = process.env.ENVIRONMENT === 'production';

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

console.log(`server started on port ${port}`);
