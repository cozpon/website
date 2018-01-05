import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class MotoTrip extends Component {
  render() {
    const { width } = this.props;

    return (
      <div>
      <Header />
      <StackGrid
        columnWidth={width <= 768 ? '100%' : '50%'}
        monitorImagesLoaded={false} >
        <div>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/online01_1000.jpg"/>
        </div>
        <div>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/Ricky_10_1000.jpg"/>
        </div>
        <div>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/Ricky_3_1000.jpeg"/>
        </div>
        <div>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/Untitled-2s_1000.jpg"/>
        </div>
        <div>
        <img src="http://payload309.cargocollective.com/1/12/398889/8499741/Ricky_10_1000.jpg"/>
        </div>



        </StackGrid>
        <div id="art-button">
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </div>
      </div>
    );
  }
}

export default sizeMe()(MotoTrip);

