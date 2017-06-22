import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, StaticRouter } from 'react-router-dom';

import Home  from './Home.jsx';
import About from './About.jsx';
import BlogList from './BlogList.jsx';

const Routes = () => (
  <Router>
    <div>
      <nav>
        <ul className="block-group">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={BlogList} />
    </div>
  </Router>
)

export default Routes;

if(typeof window !== 'undefined') {
  render((
    <Routes />
  ), document.getElementById('container'))
}
