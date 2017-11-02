import React, { PropTypes } from 'react';
import Clouds from '../common/clouds/Clouds';
import * as Icon from 'react-feather';

import './LandingPage.scss';

class LandingPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {

    let titleClasses = [
      'landing--main-title',
      'is-size-2-mobile',
      'has-text-centered',
      'has-text-weight-bold',
      'has-text-grey-darker'
    ];

    let taglineClasses = [
      'landing--tagline',
      'is-size-5',
      'is-size-6-mobile',
      'has-text-centered',
      'has-text-grey-darker'
    ];

    return (
      <div>
        <Clouds />
        <div className="landing--background-gradient"></div>

        <div className="landing--center-frame">
          <div className={titleClasses.join(' ')}>
            Clouds <br className="is-hidden-tablet" /> Against Humanity
          </div>
          <div className={taglineClasses.join(' ')}>
            An <span className="landing--highlight">uplifting</span> and <span className="landing--highlight">tasteful</span> game where humor can get <span className="landing--highlight">really dark</span>.
        </div>
        </div>

        <div className="landing--login">
          <a className="button is-info is-medium">
            <span className="icon">
              <Icon.Facebook />
            </span>
            <span>Proceed at your own risk</span>
          </a>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
};

export default LandingPage;
