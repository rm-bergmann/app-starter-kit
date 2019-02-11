import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Packages from '../../pages/Packages/Packages';
import Less from '../../pages/Less/Less';

const Routes = () => (
  <Router history={browserHistory}>
    <Fragment>
      <Menu />
      <Route exact path="/" component={Dashboard} />
      <Route path="/packages" component={Packages} />
      <Route path="/less" component={Less} />
    </Fragment>
  </Router>
);

export default Routes;