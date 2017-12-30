import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Undertow extends Component {
  render() {
    return (
      <div className="Undertow">
          <div className="">
            <div className="horizontal"><img src="http://payload175.cargocollective.com/1/12/398889/5818098/04%20Undertow_905.jpg" alt=""/></div>
            <div className="horizontal"><img src="http://payload175.cargocollective.com/1/12/398889/5818098/05%20Undertow_905.jpg" alt=""/></div>
            <div className="horizontal"><img src="http://payload175.cargocollective.com/1/12/398889/5818098/06%20Undertow_905.jpg" alt=""/></div>
            <div className="horizontal"><img src="http://payload175.cargocollective.com/1/12/398889/5818098/07%20Undertow%20installation%20viewresize_905.jpg" alt=""/></div>
        </div>
          <div id="art-button">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default Undertow;

