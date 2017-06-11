import React from 'react';
import ReactDOM from 'react-dom';

import '../less/body/header.less';

class Header extends React.Component {
  render() {
    return (
      <div className="block-group">
        <p>Header</p>
      </div>
    );
  }
}

export default Header;

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);