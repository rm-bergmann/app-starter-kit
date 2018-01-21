const path    = require('path');
const express = require('express');
const port    = process.env.PORT || 2000;
const app     = express();

const webpack  = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.js');
const compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('server started on port ' + port);
