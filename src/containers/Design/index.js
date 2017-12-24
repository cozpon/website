import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Design extends Component {
  render() {
    return (
      <div className="Design">
          <div id="art-button">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default Design;