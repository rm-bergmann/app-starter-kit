import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="block-group">
        <h3>Add logo here</h3>
      </div>
    );
  }
}

export default Header;

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);