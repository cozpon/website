import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Design extends Component {
  render() {
    return (
      <div className="Design">
        I'm gonna put my design SH in here
          <div id="art-button">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default Design;