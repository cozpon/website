import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
class Design extends Component {
  render() {
    return (
      <div className="Design">
      <Header />
like most humans and websites, this part is under construction
<br />
<br />
    <img src="http://www.grovecityohio.gov/wp-content/uploads/2015/05/RoadClosed16.jpg"/>
          <div id="art-button">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default Design;