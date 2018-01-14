import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (<Component {...props} />)} />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};

export default PublicRoute;
