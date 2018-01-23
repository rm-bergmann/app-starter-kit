import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ appName }) => (
  <header>
    <div className="block-group">
      <div className="block block-logo">
        <h1>{ appName }</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
