import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Dashboard from '../../pages/Dashboard';
import About from '../../pages/About';
import Blog from '../../pages/Blog';

const Routes = () => (
  <Router history={browserHistory}>
    <Fragment>
      <Menu />
      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </Fragment>
  </Router>
);

export default Routes;
