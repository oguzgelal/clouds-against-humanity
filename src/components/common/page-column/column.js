import React from 'react';
import PropTypes from 'prop-types';

import './column.scss';

const Column = props => {

  let styles = props.styles || {};
  if (props.grow) { styles['flexGrow'] = props.grow; }
  if (props.width) { styles['width'] = props.width; }

  return (
    <div className="page--column" style={styles}>
      {props.children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.object,
  grow: PropTypes.string,
  width: PropTypes.string,
  styles: PropTypes.object
};

export default Column;
