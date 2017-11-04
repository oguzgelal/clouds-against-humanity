import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      navbarActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ navbarActive: !this.state.navbarActive });
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">Clouds Against Humanity</a>
            <button className="button navbar-burger" onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={"navbar-menu " + (this.state.navbarActive ? 'is-active' : '')}>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Docs</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item">Overview</a>
                <a className="navbar-item">Elements</a>
                <a className="navbar-item">Components</a>
                <hr className="navbar-divider" />
                <div className="navbar-item">Version 0.6.0</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
};

export default Header;
