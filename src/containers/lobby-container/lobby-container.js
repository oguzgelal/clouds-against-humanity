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
import * as types from '../../config/types';
import * as socketActions from '../../actions/socket-actions';
import * as roomsActions from '../../actions/room-actions';

class LobbyContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.ws = null;

    this.state = {
    };
  }

  // open connection to the lobby server
  componentWillMount() {
    this.ws = new SocketObservable(env.LOBBY_SOURCE, this.props.socketActions);

    // subscribe to the lobby server to reactively respond to events
    this.ws.observable().subscribe(x => {

      // reactively update the room list
      if (x.type === types.FETCH_ROOMS_COMPLETED) {

        // dispatch the fetch success action
        this.props.roomsActions.fetchRoomsCompleted(x.data);
      }

    });

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
        <ConnectionDialogue socket={this.props.socket} ws={this.ws} />
        <Header user={this.props.user} />
        <LobbyPage
          ws={this.ws}
          user={this.props.user}
          rooms={this.props.rooms}
          fetchRooms={this.props.roomsActions.fetchRooms}
          fetchRoomsLoading={this.props.loadings.rooms}
          createRoom={this.props.roomsActions.createRoom}
          createRoomLoading={this.props.loadings.createRoom}
        />
      </div>
    );
  }
}

LobbyContainer.propTypes = {
  user: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
  socketActions: PropTypes.object.isRequired,
  rooms: PropTypes.array,
  roomsActions: PropTypes.object.isRequired,
  loadings: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    socket: state.socket,
    rooms: state.rooms,
    loadings: state.loadings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    socketActions: bindActionCreators(socketActions, dispatch),
    roomsActions: bindActionCreators(roomsActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);
