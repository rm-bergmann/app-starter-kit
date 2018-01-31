import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Header from './Header';
import Routes from './Routes';

import '../less/imports.less';

const App = () => (
  <AppContainer>
    <div>
      <Header appName="App Starter Kit" />
      <main>
        <Routes />
      </main>
    </div>
  </AppContainer>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(
    (
      <App />
    ), document.getElementById('app'),
  );
}
