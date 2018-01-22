import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Blog from './Blog';

const Routes = () => (
  <Router>
    <div>
      <nav>
        <div className="block-group">
          <ul className="block">
            <li>
              <NavLink exact activeClassName="active" to="/">Dashboard</NavLink>
            </li>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
          </ul>
        </div>
      </nav>
      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>
);

export default Routes;
