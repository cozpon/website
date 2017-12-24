import React, { Component } from 'react';
import { Link, MenuItem } from 'react-router-dom';
import Slider from 'react-viewport-slider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider>
          <Slider.Item style={{ backgroundColor: '#29225f' }}>
            <div className="page-one">
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
      </div>
    );
  }
}

export default App;

