import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './header.scss';

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

    let navbarClasses = classNames(
      'navbar-menu',
      'navbar-end',
      {
        'is-active': !!this.state.navbarActive
      }
    );

    return (
      <nav className="navbar is-dark" role="navigation" aria-label="dropdown navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">Clouds Against Humanity</a>
            <button className="button navbar-burger header--navbar-burger" onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={navbarClasses}>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-item is-hidden-mobile">
                <img className="header--avatar" src={`https://graph.facebook.com/${this.props.user.id}/picture?type=large`} />
              </a>
              <div className="navbar-dropdown is-boxed header--navbar">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Settings</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
};

export default Header;
