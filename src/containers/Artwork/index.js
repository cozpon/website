import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import Footer from '../../components/footer.component';

class Artwork extends Component {
  render() {
    return (
      <div className="Artwork">
      <Header />
        <div className="wrapper">
          <Link to='/artwork/moto' style={{ color: 'white', textDecoration: 'none' }}>
            <div className="item1"><img src="http://payload309.cargocollective.com/1/12/398889/8499741/prt_280x188_1501212697.jpeg" alt=""/>
            <br />always head west</div>
          </Link>
          <Link to='/artwork/undertow' style={{ color: 'white', textDecoration: 'none' }}>
            <div className="item2"><img src="http://payload175.cargocollective.com/1/12/398889/5818098/prt_280x188_1371293056.jpg" alt=""/>
            <br />undertow</div>
          </Link>
          <Link to='/artwork/hawaii' style={{ color: 'white', textDecoration: 'none' }}>
            <div className="item3"><img src="http://payload228.cargocollective.com/1/12/398889/6868220/prt_280x188_1409776359.jpg" alt=""/>
            <br />Hawaii</div>
          </Link>
          <Link to='/artwork/complicity' style={{ color: 'white', textDecoration: 'none' }}>
            <div className="item4"><img src="http://payload312.cargocollective.com/1/12/398889/8540354/prt_280x188_1432849228.jpg" alt=""/>
            <br />complicity</div>
          </Link>
        </div>
          <div id="art-button">
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Artwork;

