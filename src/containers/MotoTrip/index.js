import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MotoTrip extends Component {
  render() {
    return (
      <div className="Artwork">
          <div className="container">
            <div className="big"><img src="/images/1.jpg" alt=""/></div>
            <div className="big"><img src="/images/10.jpg" alt="bike"/></div>
            <div className="big"><img src="/images/3.jpg" alt=""/></div>
            <div className="big"><img src="/images/2.jpg" alt=""/></div>
            <div className="horizontal"><img src="/images/5.jpg" alt=""/></div>
            <div className="horizontal"><img src="/images/6.jpg" alt=""/></div>
            <div className="horizontal"><img src="/images/7.jpg" alt=""/></div>
            <div className="bigger"><img src="/images/8.jpg" alt=""/></div>
            <div className="bigger"><img src="/images/9.jpg" alt=""/></div>
        </div>
          <div id="art-button">
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default MotoTrip;

