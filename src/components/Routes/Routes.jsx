import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
} from 'react-router-dom';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import About from 'components/About/About';
import Dashboard from 'components/Dashboard/Dashboard';
import Packages from 'components/Packages/Packages';

const Routes = () => (
  <Router history={browserHistory}>
    <Fragment>
      <Header appName="App Starter Kit" />
      <Menu />
      <main>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/packages" component={Packages} />
      </main>
      <aside className="sidebar">Sidebar content</aside>
      <footer className="footer">Footer Content</footer>
    </Fragment>
  </Router>
);

export default Routes;
