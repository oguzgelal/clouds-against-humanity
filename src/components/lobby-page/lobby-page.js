import React from 'react';
import PropTypes from 'prop-types';
import Page from '../common/page/page';
import Column from '../common/page-column/column';
import GameList from '../common/game-list/game-list';
import Box from '../common/box/box';
import NewRoomModal from '../new-room-modal/new-room-modal';

import * as Icon from 'react-feather';

import './lobby-page.scss';

class LobbyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      newRoomModalActive: false,
    };

    this.createRoomClicked = this.createRoomClicked.bind(this);
    this.createRoomCancelled = this.createRoomCancelled.bind(this);
  }

  componentDidMount() {
    this.props.fetchRooms(this.props.ws);
  }

  createRoomClicked() {
    const s = Object.assign({}, this.state);
    s.newRoomModalActive = true;
    this.setState(s);
  }

  createRoomCancelled() {
    const s = Object.assign({}, this.state);
    s.newRoomModalActive = false;
    this.setState(s);
  }

  render() {
    return (
      <Page>
        <Column grow="1">
          <GameList games={this.props.rooms} />
        </Column>
        <Column width="20em" styles={{ marginLeft: '2em' }} className="lobby--info">
          <div className="lobby--info-menu">
            <Box hover className="lobby--info-menu-item" onClick={this.createRoomClicked}>
              <Icon.PlusCircle />
              <span className="lobby--info-menu-item-txt">Create room</span>
            </Box>
            <Box hover className="lobby--info-menu-item">
              <Icon.User />
              <span className="lobby--info-menu-item-txt">Profile</span>
            </Box>
            <Box hover className="lobby--info-menu-item">
              <Icon.Settings />
              <span className="lobby--info-menu-item-txt">Settings</span>
            </Box>
          </div>
        </Column>

        {/* create room modal */}
        <NewRoomModal
          ws={this.props.ws}
          user={this.props.user}
          active={this.state.newRoomModalActive}
          cancel={this.createRoomCancelled}
          createRoom={this.props.createRoom}
          createRoomLoading={this.props.createRoomLoading}
        />

      </Page >
    );
  }
}

LobbyPage.propTypes = {
  ws: PropTypes.object,
  user: PropTypes.object.isRequired,
  rooms: PropTypes.array,
  fetchRooms: PropTypes.func,
  fetchRoomsLoading: PropTypes.bool,
  createRoom: PropTypes.func,
  createRoomLoading: PropTypes.bool,
};

export default LobbyPage;
