import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {BrowserRouter as Router, Route, Link, StaticRouter, Switch, matchPath } from 'react-router-dom';

import Home     from './Home.jsx';
import About    from './About.jsx';
import BlogList from './BlogList.jsx';

const Routes = () => (
  <Router>
    <div className="block-group">
      <ul>
        <li className="block"><Link to="/">Home</Link></li>
        <li className="block"><Link to="/about">About</Link></li>
        <li className="block"><Link to="/blog">Blog</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={BlogList} />
      </Switch>
    </div>
  </Router>
)

export default Routes;

ReactDOM.render((
  <Routes />
), document.getElementById('main-nav'))