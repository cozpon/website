import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artwork extends Component {
  render() {
    return (
      <div className="Artwork">
          <div id="art-text">
            It was going to be <br />a lonely trip back.
          </div>
            <img id="splash" src="http://payload309.cargocollective.com/1/12/398889/8499741/online01_1000.jpg">
            </img>
          <div id="art-button">
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default Artwork;

