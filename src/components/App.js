/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import LandingContainer from '../containers/landing-container/LandingContainer';
import GameContainer from '../containers/game-container/GameContainer';
import NotFoundPage from '../components/not-found-page/NotFoundPage';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/game" component={GameContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
