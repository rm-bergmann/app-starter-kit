import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Routes from '../components/Routes/Routes';

const App = () => (
  <Fragment>
    <Header appName="App Starter Kit" />
    <main>
      <Routes />
    </main>
  </Fragment>
);

export default App;
