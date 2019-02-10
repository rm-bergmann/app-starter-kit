import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ appName }) => (
  <header className="header">
    <div className="header--logo-wrapper">
      <h1 className="header--logo-title">{ appName }</h1>
    </div>
  </header>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
