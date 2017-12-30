import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
class Design extends Component {
  render() {
    return (
      <div className="Design">
      <Header />
        I'm gonna put my design SH in here
          <div id="art-button">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default Design;