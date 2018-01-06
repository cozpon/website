import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
class Hawaii extends Component {
  render() {
    return (
      <div className="Hawaii">
      <Header />
        like a human, this website is under construction and always growing...
        unfortunately I haven't gotten to this yet
          <div id="art-button">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default Hawaii;