import React from 'react';
import ReactDOM from 'react-dom';

import '../less/imports.less';

import App from './App';

if (typeof window !== 'undefined') {
  ReactDOM.render(
    (
      <App />
    ), document.getElementById('app'),
  );
}
