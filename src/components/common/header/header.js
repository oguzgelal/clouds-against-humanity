import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Cloud from '../clouds/cloud';

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
            <a className="navbar-item header--logo">
              <div className="header--logo-text">Clouds Against Humanity</div>
              <div className="header--logo-text-after"></div>
            </a>
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
