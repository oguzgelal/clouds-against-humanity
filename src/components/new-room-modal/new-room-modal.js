import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/modal/modal';
import './new-room-modal.scss';

class NewRoomModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      newRoomInitial: {
        title: '',
        desc: '',
        playerLimit: 6,
        audienceLimit: 10,
        allowAudience: false,
        passwordProtected: false,
        votingMode: 'moderator',
      },
      newRoom: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.createRoomSubmitted = this.createRoomSubmitted.bind(this);
  }

  componentWillMount() {
    const s = Object.assign({}, this.state);
    s.newRoom = Object.assign({}, s.newRoomInitial);
    this.setState(s);
  }

  handleChange(event) {
    const s = Object.assign({}, this.state);
    const target = event.target;
    const value = target.type === 'checkbox' ? !!target.checked : target.value;
    s.newRoom[event.target.name] = value;
    this.setState(s);
  }

  resetState() {
    const s = Object.assign({}, this.state);
    s.newRoom = s.newRoomInitial;
    this.setState(s);
  }

  createRoomSubmitted() {
    const room = Object.assign({}, this.state.newRoom);
    room.title = this.state.newRoom.title || `${this.props.user.name}'s room`;
    room.userid = this.props.user.id;
    room.username = this.props.user.name;
    this.resetState();
    this.props.createRoom(this.props.ws, room)
  }

  render() {
    return (
      <Modal
        submit="Submit"
        cancel="Cancel"
        title="Create room"
        active={this.props.active}
        loading={this.props.createRoomLoading}
        onSubmit={this.createRoomSubmitted}
        onCancel={this.props.cancel}
      >
        {/* room title */}
        <div className="field">
          <label className="label">Room name</label>
          <div className="control">
            <input
              type="text"
              name="title"
              className="input"
              onChange={this.handleChange}
              value={this.state.newRoom.title || ''}
              placeholder={`${this.props.user.name}'s room`}
            />
          </div>
        </div>

        {/* room description */}
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              rows="2"
              name="desc"
              value={this.state.newRoom.desc || ''}
              onChange={this.handleChange}
              className="textarea"
              placeholder="My lovely room"
            />
          </div>
        </div>

        {/* player limit */}
        <div className="field">
          <label className="label">Player Limit</label>
          <div className="control">
            <input
              type="number"
              name="playerLimit"
              className="input"
              onChange={this.handleChange}
              value={this.state.newRoom.playerLimit}
            />
          </div>
        </div>

        {/* allow audience */}
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="allowAudience"
                style={{ marginRight: '0.8em' }}
                checked={!!this.state.newRoom.allowAudience}
                onChange={this.handleChange}
              />
              Allow audience
            </label>
          </div>
        </div>

        {
          this.state.newRoom.allowAudience &&
          <div style={{ display: 'flex' }}>

            {/* voting mode */}
            <div className="field" style={{ marginRight: '1em', flexGrow: 1 }}>
              <label className="label">Voting mode</label>
              <div className="control">
                <div className="select" style={{ width: '100%' }}>
                  <select
                    name="votingMode"
                    value={this.state.newRoom.votingMode || 'moderator'}
                    onChange={this.handleChange}
                    style={{ width: '100%' }}
                  >
                    <option value="moderator">Moderator</option>
                    <option value="audience">Audience</option>
                  </select>
                </div>
              </div>
            </div>

            {/* audience limit */}
            <div className="field">
              <label className="label">Audience Limit</label>
              <div className="control">
                <input
                  type="number"
                  name="audienceLimit"
                  className="input"
                  onChange={this.handleChange}
                  value={this.state.newRoom.audienceLimit}
                />
              </div>
            </div>

          </div>

        }

        {/* password protected */}
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                name="passwordProtected"
                style={{ marginRight: '0.8em' }}
                checked={!!this.state.newRoom.passwordProtected}
                onChange={this.handleChange}
              />
              Password protection ?
            </label>
          </div>
        </div>

        {/* password */}
        {
          this.state.newRoom.passwordProtected &&
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                name="password"
                className="input"
                onChange={this.handleChange}
                value={this.state.newRoom.password || ''}
              />
            </div>
          </div>
        }



      </Modal>
    );
  }
}

NewRoomModal.propTypes = {
  ws: PropTypes.object,
  user: PropTypes.object,
  active: PropTypes.bool,
  cancel: PropTypes.func,
  createRoom: PropTypes.func,
  createRoomLoading: PropTypes.bool,
};

export default NewRoomModal;
