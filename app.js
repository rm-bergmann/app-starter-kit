const express = require('express');
const port    = process.env.PORT || 3000;
const app     = express();

const React    = require('react');
const ReactDOM = require('react-dom/server');
const Home     = require('./src/components/Home.jsx');

require('babel-core/register')({
  presets: [
    'react',
    'transform-react-jsx'
  ]
});

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

// serve static assets normally
app.use(express.static(__dirname + '/public'));

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

app.get('/about', function (req, res) {
  res.send('<h1>About Page</h1>');
});

app.get('/about/:name?/:title?', function(req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('<h1>' + name + '</h1>' + title);
});

app.get('/blog/:id?', function (req, res) {
  var blogId = req.params.id;
  res.send(blogId);
});

app.get('*', function(req, res) {
  res.send('404 Not found');
});

app.listen(port);
console.log('server started on port ' + port);
