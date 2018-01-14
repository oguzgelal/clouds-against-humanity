import React from 'react';
import PropTypes from 'prop-types';
import Page from '../common/page/page';
import Column from '../common/page-column/column';
import GameList from '../common/game-list/game-list';
import Box from '../common/box/box';
import Modal from '../common/modal/modal';
import * as Icon from 'react-feather';

import './lobby-page.scss';

class LobbyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

      games: [
        {
          started: true,
          title: 'Started game room',
          desc: 'lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet',
          players_active: 5,
          players_limit: 5,
          allow_watchers: true,
          watchers_active: 17,
          watchers_limit: 30
        },
        {
          started: false,
          title: 'Pending game room',
          desc: 'lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet',
          players_active: 3,
          players_limit: 8,
          allow_watchers: false,
        },
        {
          started: false,
          title: 'Sample game room 2',
          players_active: 5,
          allow_watchers: true,
          watchers_active: 11,
        },
        {
          started: true,
          title: 'Sample game room 2',
          players_active: 7,
          allow_watchers: true,
          watchers_active: 9,
          watchers_limit: 10
        }
      ],

      newRoomInitial: {
        modal: false,
        roomName: ''
      },

      newRoom: {}
    };

    this.fetchRooms = this.fetchRooms.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createGameClicked = this.createGameClicked.bind(this);
    this.createRoomClicked = this.createRoomClicked.bind(this);
    this.cancelCreateClicked = this.cancelCreateClicked.bind(this);
  }

  handleChange(event) {
    const s = Object.assign({}, this.state)
    s.newRoom[event.target.name] = event.target.value;
    this.setState(s);
  }

  fetchRooms() {

  }

  createGameClicked() {
    const s = Object.assign({}, this.state);
    s.newRoom = s.newRoomInitial;
    s.newRoom.modal = true;
    this.setState(s);
  }

  createRoomClicked() {
    this.props.createRoom(this.props.ws, this.state.newRoom)
  }

  cancelCreateClicked() {
    const s = Object.assign({}, this.state);
    s.newRoom.modal = false;
    this.setState(s);
  }

  render() {
    return (
      <Page>
        <Column grow="1">
          <GameList games={this.state.games} />
        </Column>
        <Column width="20em" styles={{ marginLeft: '2em' }} className="lobby--info">
          <div className="lobby--info-menu">
            <Box hover className="lobby--info-menu-item">
              <Icon.User />
              <span className="lobby--info-menu-item-txt">Profile</span>
            </Box>
            <Box hover className="lobby--info-menu-item">
              <Icon.Settings />
              <span className="lobby--info-menu-item-txt">Settings</span>
            </Box>
            <Box hover className="lobby--info-menu-item" onClick={this.createGameClicked}>
              <Icon.PlusCircle />
              <span className="lobby--info-menu-item-txt">Create room</span>
            </Box>
          </div>
        </Column>

        {/* create room modal */}
        <Modal
          active={this.state.newRoom.modal}
          loading={this.props.createRoomLoading}
          title="Create room"
          submit="Submit"
          cancel="Cancel"
          onSubmit={this.createRoomClicked}
          onCancel={this.cancelCreateClicked}
        >
          <div className="field">
            <label className="label">Room name</label>
            <div className="control">
              <input
                name="roomName"
                value={this.state.newRoom.roomName || ''}
                onChange={this.handleChange}
                className="input"
                type="text"
                placeholder="e.g Alex's room"
              />
            </div>
          </div>
        </Modal>

      </Page >
    );
  }
}

LobbyPage.propTypes = {
  ws: PropTypes.object,
  user: PropTypes.object.isRequired,
  fetchRooms: PropTypes.func,
  fetchRoomsLoading: PropTypes.bool,
  createRoom: PropTypes.func,
  createRoomLoading: PropTypes.bool,
};

export default LobbyPage;
