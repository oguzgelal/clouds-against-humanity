import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './box.scss';

const Box = props => {

  let boxClassNames = [];
  if (props.className) {
    boxClassNames = props.className.split(' ');
  }

  let boxClasses = classNames(
    'cah--box',
    boxClassNames,
    { 'cah--box-hover': !!props.hover }
  );

  const p = Object.assign({}, props)
  p.hover = null; delete p.hover;
  p.children = null; delete p.children;
  return (
    <div {...p} className={boxClasses}>
      {props.children}
    </div>
  );
};

Box.propTypes = {
  hover: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Box;
