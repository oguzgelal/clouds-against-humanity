import React from 'react';
import PropTypes from 'prop-types';

import './page.scss';

const PageWrapper = props => {

  let styles = props.styles || {};
  if (props.justifyContent) { styles['justifyContent'] = props.justifyContent || 'center'; }
  if (props.alignItems) { styles['alignItems'] = props.alignItems || 'center'; }

  return (
    <div className="page--wrapper" style={styles}>
      {props.children}
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  styles: PropTypes.object
};

export default PageWrapper;
