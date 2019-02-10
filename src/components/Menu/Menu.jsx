import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const itemClassName = 'menu--list-item';
  const linkClassName = 'menu--list-item-link';
  const activeClassName = 'menu--list-item-link---active';
  return (
    <nav className="menu">
      <ul className="menu--list">
        <li className={itemClassName}>
          <NavLink
            exact
            className={linkClassName}
            activeClassName={activeClassName}
            to="/"
          >
            Dashboard
          </NavLink>
        </li>
        <li className={itemClassName}>
          <NavLink
            className={linkClassName}
            activeClassName={activeClassName}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={itemClassName}>
          <NavLink
            className={linkClassName}
            activeClassName={activeClassName}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
