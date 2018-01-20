const path    = require('path');
const express = require('express');
const port    = process.env.PORT || 3000;
const app     = express();

const React    = require('react');
const ReactDOM = require('react-dom/server');
const Home     = require('./src/components/Home.jsx');

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

// serve static assets normally
app.use(express.static(__dirname + '/public'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/', function(req, res) {

  const output = ReactDOM.renderToString(React.createFactory(Home));

  res.render('index',
    {
      query : req.query,
      title : 'Home Page',
      react : output
    }
  );
});

app.listen(port);
console.log('server started on port ' + port);
