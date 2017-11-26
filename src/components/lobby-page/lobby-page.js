import React from 'react';
import PropTypes from 'prop-types';

import Page from '../common/page/page';
import Column from '../common/page-column/column';

import './lobby-page.scss';
import TestImage from '../../assets/test.png';

class LobbyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <Page>
        <Column grow="1">
        <div>Games will be listed here</div>
        </Column>
      </Page>
    );
  }
}

LobbyPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default LobbyPage;
