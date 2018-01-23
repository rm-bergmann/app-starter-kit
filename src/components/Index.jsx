import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Routes from './Routes';

import '../less/imports.less';

const App = () => (
  <div>
    <Header appName="App Starter Kit" />
    <main>
      <Routes />
    </main>
  </div>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(
    (
      <App />
    ), document.getElementById('app'),
  );
}
