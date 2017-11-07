import React from 'react';
import PropTypes from 'prop-types';

import TestImage from '../../assets/test.png';

class LobbyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <img src={TestImage} />
      </div>
    );
  }
}

LobbyPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default LobbyPage;
