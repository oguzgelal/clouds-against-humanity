import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../actions/login-actions';
import LandingPage from '../../components/landing-page/landing-page';

class LandingContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <LandingPage
        fbLoginLoading={this.props.loadings.fbLogin}
        fbLoginClicked={this.props.loginActions.fbLoginClicked}
      />
    );
  }
}

LandingContainer.propTypes = {
  loadings: PropTypes.object.isRequired,
  loginActions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    loadings: state.loadings
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer);
