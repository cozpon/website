import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import Slider from 'react-viewport-slider';

class MotoTrip extends Component {
  render() {
    return (
      <div>
      <Header />
      <Slider>
        <Slider.Item style={{ backgroundColor: '#666' }}>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/online01_1000.jpg"/>
        </Slider.Item>

        <Slider.Item style={{ backgroundColor: '#666' }}>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/Ricky_3_1000.jpeg"/>
        </Slider.Item>

        <Slider.Item style={{ backgroundColor: '#666' }}>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/Ricky_10_1000.jpg"/>
        </Slider.Item>

        <Slider.Item style={{ backgroundColor: '#666' }}>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/Untitled-2w_1_1000.jpg"/>
        </Slider.Item>

        <Slider.Item style={{ backgroundColor: '#666' }}>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/oceanlake_1000.jpg"/>
        </Slider.Item>

        <Slider.Item style={{ backgroundColor: '#666' }}>
        Motorcycle trip across the united states of america done alone with a hammock and a honda shadow
        </Slider.Item>
      </Slider>

          <div id="art-button">
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default MotoTrip;

