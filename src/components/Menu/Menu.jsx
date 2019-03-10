import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ menuClass }) => {
  const classNames = `menu menu---${menuClass}`;
  return (
    <nav className={classNames}>
      <ul className="menu--list">
        <MenuItem />
      </ul>
    </nav>
  );
};

Menu.defaultProps = {
  menuClass: 'closed',
};

Menu.propTypes = {
  menuClass: PropTypes.string,
};

export default Menu;
