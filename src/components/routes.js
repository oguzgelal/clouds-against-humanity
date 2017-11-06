/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { Switch, NavLink, Route } from 'react-router-dom';
import PrivateRoute from '../components/common/private-route/private-route';
import LandingContainer from '../containers/landing-container/landing-container';
import LobbyContainer from '../containers/lobby-container/lobby-container';
import GameContainer from '../containers/game-container/game-container';
import NotFoundPage from '../components/not-found-page/not-found-page';

class Routes extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <PrivateRoute exact path="/lobby" user={this.props.user} component={LobbyContainer} />
          <PrivateRoute exact path="/game" user={this.props.user} component={GameContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

Routes.propTypes = {
  children: PropTypes.element,
  user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
