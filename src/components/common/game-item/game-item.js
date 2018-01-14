import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Icon from 'react-feather';
import Box from '../box/box';

import './game-item.scss';

const GameItem = props => {

  let started = props.game.started ? 'started' : 'pending';

  let circleClassNames = classNames(
    'game-item--status-circle',
    `game-item--status-circle-${started}`
  );

  return (
    <Box className="game-item">
      <div className="game-item--status">
        <div className={circleClassNames}></div>
      </div>
      <div className="game-item--details">
        <div className="game-item--details-title">{props.game.title}</div>
        {
          props.game.desc &&
          <div className="game-item--details-desc">{props.game.desc}</div>
        }
      </div>
      <div className="game-item--icons">
        <div className="game-item--icon game-item--icons-players">
          <div className="game-item--active-count">
            <Icon.Users />
            <div className="game-item--active-count-content">
              {props.game.players_active}
              {props.game.players_limit && <div>/</div>}
              {props.game.players_limit}
            </div>
          </div>
        </div>
        <div className="game-item--icon game-item--icons-watchers">
          {
            props.game.allow_watchers &&
            <div className="game-item--active-count">
              <Icon.Eye />
              <div className="game-item--active-count-content">
                {props.game.watchers_active}
                {props.game.watchers_limit && <div>/</div>}
                {props.game.watchers_limit}
              </div>
            </div>
          }
          {!props.game.allow_watchers && <Icon.EyeOff />}
        </div>
        <div className="game-item--icon game-item--icons-password"></div>
      </div>
    </Box>
  );
};

GameItem.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameItem;
