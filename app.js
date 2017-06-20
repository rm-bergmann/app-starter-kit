const express = require('express');
const port    = process.env.PORT || 3000;
const app     = express();

const React    = require('react');
const ReactDOM = require('react-dom/server');

const Home = require('./src/components/Home.jsx');

//import { match, RouterContext } from 'react-router';
//const routes = require('./src/components/Routes.jsx').routes;

//const request  = require('request');
//const blogData = 'http://blog.dev/blog';

//const ReactDOMServer = require('react-dom/server');
//const BlogList       = require('./src/components/BlogList.jsx');


app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

// serve static assets normally
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

  res.render('index',
    {
      React: ReactDOM.renderToString(<Home />),
      query : req.query,
      title : 'Home Page'
    }
  );
});


/*
var ComponentFactory = React.createFactory(BlogList);
app.get('/blog', function (req, res) {
  var markup = ReactDOMServer.renderToString(ComponentFactory());
  res.send(markup);
});
*/

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










