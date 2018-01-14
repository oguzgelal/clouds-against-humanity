import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Icon from 'react-feather';

import './connection-dialogue.scss';

const ConnectionDialogue = props => {

  let dialogueClasses = classNames(
    'connection-dialogue--container',
    {
      'connection-dialogue--hidden': !!props.socket.connected
    }
  );

  let status = '';
  if (props.socket.connected) { status = <Icon.CheckCircle />; }
  else if (props.socket.connecting) { status = <Icon.Disc />; }
  else { status = <Icon.XCircle />; }

  return (
    <div className={dialogueClasses}>
      <div className="notification is-primary connection-dialogue--box">
        <div className="connection-dialogue--box-title">{status}</div>
        <div className="connection-dialogue--box-message">{props.socket.connectionMessage}</div>
      </div>
    </div>
  );
};

ConnectionDialogue.propTypes = {
  socket: PropTypes.object.isRequired
};

export default ConnectionDialogue;
