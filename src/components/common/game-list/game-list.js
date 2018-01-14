import React from 'react';
import PropTypes from 'prop-types';
import GameItem from '../game-item/game-item';

import './game-list.scss';

const GameList = props => {

  let games = [];
  props.games.map((game, i) => {
    games.push(<GameItem game={game} key={i} />);
  })

  return (
    <div className="game-list--cont">
      {games}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired
};

export default GameList;
