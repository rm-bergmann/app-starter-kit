import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="block-group">
        <h2>Cool Logo</h2>
      </div>
    );
  }
}

export default Header;

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);