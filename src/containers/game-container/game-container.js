import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GamePage from '../../components/game-page/game-page';
import Header from '../../components/common/header/header';

class GameContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <GamePage />
      </div>
    );
  }
}

GameContainer.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    //authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(..., dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
