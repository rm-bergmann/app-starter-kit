const path = require('path');
const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

const React = require('react');
const ReactDOM = require('react-dom/server');

const IS_PRODUCTION = process.env.ENVIRONMENT === 'production';

app.get('*', (req, res, next) => {
  res.redirect('http://' + req.get('host') + req.url);
});

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
