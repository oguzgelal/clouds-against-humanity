import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (user.id ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    )} />
  );
};

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};

export default PrivateRoute;
