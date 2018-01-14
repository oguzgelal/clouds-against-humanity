import React from 'react';
import PropTypes from 'prop-types';
import Clouds from '../common/clouds/clouds';
import * as Icon from 'react-feather';
import classNames from 'classnames';

import './landing-page.scss';

class LandingPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {

    let titleClasses = classNames(
      'landing--main-title',
      'is-size-2-mobile',
      'has-text-centered',
      'has-text-weight-bold',
    );

    let taglineClasses = classNames(
      'landing--tagline',
      'is-size-5',
      'is-size-6-mobile',
      'has-text-centered',
    );

    let loginButtonClasses = classNames(
      'button',
      'is-primary',
      'is-medium',
      {
        'is-loading': !!this.props.fbLoginLoading
      }
    );

    return (
      <div>
        <Clouds />
        <div className="landing--background-gradient" />

        <div className="landing--center-frame">
          <div className={titleClasses}>
            Clouds <br className="is-hidden-tablet" /> Against Humanity
          </div>
          <div className={taglineClasses}>
            An <span className="landing--highlight">uplifting</span> and <span className="landing--highlight">tasteful</span> game where the humor can get <span className="landing--highlight">really dark</span>.
          </div>
        </div>

        <div className="landing--login">
          <button className={loginButtonClasses} onClick={this.props.fbLoginClicked}>
            <span className="icon">
              <Icon.Facebook />
            </span>
            <span>Proceed at your own risk</span>
          </button>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  fbLoginClicked: PropTypes.func.isRequired,
  fbLoginLoading: PropTypes.bool
};

export default LandingPage;
