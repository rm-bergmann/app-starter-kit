import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import About from 'components/About/About';
import Dashboard from 'components/Dashboard/Dashboard';
import Sidebar from 'components/Sidebar/Sidebar';
import Footer from 'components/Footer/Footer';
import Packages from 'components/Packages/Packages';

const Routes = () => (
  <Router>
    <Fragment>
      <Header appName="App Starter Kit" />
      <Menu />
      <main>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/packages" component={Packages} />
      </main>
      <Sidebar />
      <Footer />
    </Fragment>
  </Router>
);

export default Routes;
