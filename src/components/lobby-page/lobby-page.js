import React from 'react';
import PropTypes from 'prop-types';

class LobbyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <div />
    );
  }
}

LobbyPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default LobbyPage;
