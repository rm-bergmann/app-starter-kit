import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import BlogList from './BlogList';

const Routes = () => (
  <Router>
    <div>
      <nav>
        <ul className="block-group">
          <li><Link href="/" to={Home}>Home</Link></li>
          <li><Link href="/about" to={About}>About</Link></li>
          <li><Link href="/blog" to={BlogList}>Blog</Link></li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={BlogList} />
    </div>
  </Router>
);

export default Routes;

if (typeof window !== 'undefined') {
  render(
    (
      <Routes />
    ), document.getElementById('app'),
  );
}
