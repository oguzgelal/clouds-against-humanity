import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LobbyPage from '../../components/lobby-page/lobby-page';
import Header from '../../components/common/header/header';
import history from '../../config/history';

class LobbyContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Header user={this.props.user} />
        <LobbyPage user={this.props.user} />
      </div>
    );
  }
}

LobbyContainer.propTypes = {
  user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
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
)(LobbyContainer);
