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
import Less from 'components/Less/Less';
import Colors from 'components/Colors/Colors';
import Buttons from 'components/Buttons/Buttons';
import Examples from 'components/Examples/Examples';

const Routes = () => (
  <Router history={browserHistory}>
    <Fragment>
      <Header appName="App Starter Kit" />
      <main>
        <aside className="sidebar">
          <Menu />
        </aside>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/packages" component={Packages} />
        <Route path="/less" component={Less} />
        <Route path="/colors" component={Colors} />
        <Route path="/examples" component={Examples} />
        <Route path="/buttons" component={Buttons} />
      </main>
    </Fragment>
  </Router>
);

export default Routes;
