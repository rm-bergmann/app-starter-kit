import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';

const Header = ({ appName }) => (
  <header className="header">
    <div className="header--logo-wrapper">
      <a href="/" className="header--logo-title">
        { appName }
      </a>
    </div>
    <div className="header--mobile-menu">
      <Menu />
    </div>
  </header>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
