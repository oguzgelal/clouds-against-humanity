import React, { PropTypes } from 'react';
import Cloud from './Cloud';
import './Clouds.scss';

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Clouds = (props) => {
  let count = props.count || 30;
  let speedMax = props.speedMax || 50, speedMin = props.speedMin || 20;
  let sizeMax = props.sizeMax || 80, sizeMin = props.sizeMin || 10;

  let clouds = [];
  for (let i = 0; i < count; i++) {
    let speed = rand(speedMin, speedMax);
    let size = rand(sizeMin, sizeMax) / 100;
    let top = rand(0, 100);
    let delay = rand(0, 30);
    let styles = {
      'WebkitAnimation': `clouds--animate ${speed}s linear infinite`,
      'MozAnimation': `clouds--animate ${speed}s linear infinite`,
      'animation': `clouds--animate ${speed}s linear infinite`,
      'WebkitAnimationDelay': `${delay}s`,
      'MozAnimationDelay': `${delay}s`,
      'animationDelay': `${delay}s`,
      'WebkitTransform': `scale(${size})`,
      'MozTransform': `scale(${size})`,
      'transform': `scale(${size})`,
      'top': `${top}vh`
    };
    clouds.push(
      <div className="clouds--wrapper" key={'cloud' + i} style={styles}>
        <Cloud />
      </div>
    );
  }

  return (
    <div className="clouds--container">
      {clouds}
    </div>
  );
};

Clouds.propTypes = {
  count: PropTypes.number,
  speedMax: PropTypes.number,
  speedMin: PropTypes.number,
  sizeMax: PropTypes.number,
  sizeMin: PropTypes.number
};

export default Clouds;
