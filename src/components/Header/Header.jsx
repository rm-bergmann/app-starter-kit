import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import MenuIcon from '../Menu/MenuIcon';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuDisplay: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    const { menuDisplay } = this.state;

    this.setState({
      menuDisplay: !menuDisplay,
    });
  }

  render() {
    const { appName } = this.props;
    const { menuDisplay } = this.state;
    const menuClass = menuDisplay ? 'open' : 'closed';
    return (
      <header className="header">
        <div className="header--logo-wrapper">
          <a href="/" className="header--logo-title">
            {appName}
          </a>
        </div>
        <div className="header--mobile-menu">
          <button onClick={this.showMenu} type="button">
            <MenuIcon />
          </button>
          <Menu menuClass={menuClass} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
