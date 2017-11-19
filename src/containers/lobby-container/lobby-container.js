import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LobbyPage from '../../components/lobby-page/lobby-page';
import Header from '../../components/common/header/header';
import history from '../../config/history';
import env from '../../config/env';
import SocketObservable from '../../observables/socket-observable';
import ConnectionDialogue from '../../components/common/connection-dialogue/connection-dialogue';
import * as socketActions from '../../actions/socket-actions';

class LobbyContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.ws = null;

    this.state = {
    };
  }

  // open connection to the lobby server
  componentDidMount() {
    this.ws = new SocketObservable(env.LOBBY_SOURCE, this.props.socketActions);
    this.ws.subscribe(x => { console.log(x); });
  }

  // close connection to the lobby server
  componentWillUnmount() {
    if (this.ws) {
      try { this.ws.close(); }
      catch (e) { throw e; }
    }
  }

  render() {
    return (
      <div>
        <ConnectionDialogue socket={this.props.socket} />
        <Header user={this.props.user} />
        <LobbyPage user={this.props.user} />
      </div>
    );
  }
}

LobbyContainer.propTypes = {
  user: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    socket: state.socket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    socketActions: bindActionCreators(socketActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);
