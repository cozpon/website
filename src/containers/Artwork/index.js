import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-viewport-slider';

class Artwork extends Component {
  render() {
    return (
      <Slider>
          <Slider.Item style={{ backgroundColor: '#29225f' }}>
            <div className="Artwork">
            hello.<br />
            cześć.<br />
            willkommen.<br />
            aloha.<br />
            </div>
          </Slider.Item>
          <Slider.Item style={{ backgroundColor: '#0c2759' }}>
            <div className="buttons">
              <Link to='/artwork' style={{ color: 'white', textDecoration: 'none' }}>Artwork.</Link><br />
              <Link to='/design'style={{ color: 'white', textDecoration: 'none' }}>Design.</Link><br />
            </div>
          </Slider.Item>
      </Slider>
    );
  }
}

export default Artwork;

