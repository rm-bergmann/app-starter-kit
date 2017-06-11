import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {BrowserRouter as Router, Route, Link, StaticRouter, matchPath } from 'react-router-dom';

import Home  from './Home.jsx';
import About from './About.jsx';
import Blog  from './Blog.jsx';

const Routes = () => (
  <Router>
    <div className="block-group">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>
)

export default Routes;


ReactDOM.render((
  <Routes />
), document.getElementById('main-nav'))