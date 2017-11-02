import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LandingPage from '../../components/landing-page/LandingPage';

class LandingContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <LandingPage />
    );
  }
}

LandingContainer.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    //authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(..., dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer);
