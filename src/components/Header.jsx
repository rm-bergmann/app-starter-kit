import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => (
  <div className="block-group">
    <h2>Cool Logo</h2>
  </div>
);

export default Header;

ReactDOM.render(
  <Header />,
  document.getElementById('header'),
);

if (typeof window !== 'undefined') {
  render(
    (
      <Header />
    ), document.getElementById('header'),
  );
}