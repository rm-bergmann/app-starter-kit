const path    = require('path');
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
