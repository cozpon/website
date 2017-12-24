import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-viewport-slider';

class Artwork extends Component {
  render() {
    return (
      <Slider>
          <Slider.Item style={{ backgroundColor: '#555' }}>
            <div className="Artwork">
            this is where my artwork goes lmao
            </div>
          </Slider.Item>
          <Slider.Item style={{ backgroundColor: '#666' }}>
            <div className="links">
              some links to some shit
            </div>
          </Slider.Item>
      </Slider>
    );
  }
}

export default Artwork;

