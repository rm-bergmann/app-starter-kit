const express = require('express');
const port    = process.env.PORT || 3000;
const app     = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// serve static assets normally
app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/blog', function (req, res) {
  res.render('blog');
});

app.get('/blog/:id?', function (req, res) {
  var blogId = req.params.id;
  res.send(blogId);
});

app.listen(port);
console.log('server started on port ' + port);