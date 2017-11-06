import React from 'react';
import PropTypes from 'prop-types';

import Cloud from './cloud';
import './clouds.scss';

class Clouds extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    const self = this;
    let count = self.props.count || 30;
    let speedMax = self.props.speedMax || 50;
    let speedMin = self.props.speedMin || 20;
    let sizeMax = self.props.sizeMax || 80;
    let sizeMin = self.props.sizeMin || 10;
    let clouds = [];
    for (let i = 0; i < count; i++) {
      let speed = self.rand(speedMin, speedMax);
      let size = self.rand(sizeMin, sizeMax) / 100;
      let top = self.rand(0, 80);
      let delay = self.rand(-50, 50);
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
  }
}

Clouds.propTypes = {
  count: PropTypes.number,
  speedMax: PropTypes.number,
  speedMin: PropTypes.number,
  sizeMax: PropTypes.number,
  sizeMin: PropTypes.number
};

export default Clouds;
