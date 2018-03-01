import React from 'react';
import { AppContainer } from 'react-hot-loader';
import Header from './Header';
import Routes from './Routes';

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

export default App;
