import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class Undertow extends Component {
  render() {
    const { width } = this.props.size;
    console.log(this.props.size);
    return (
      <div>
        <Header />
        <StackGrid
            columnWidth={width <= 800 ? '100%' : '100%'}
            monitorImagesLoaded={true} >
            <div>
            <img src="http://payload175.cargocollective.com/1/12/398889/5818098/04%20Undertow_905.jpg" alt=""/>
            </div>
            <div>
            <img src="http://payload175.cargocollective.com/1/12/398889/5818098/05%20Undertow_905.jpg" alt=""/>
            </div>
            <div>
            <img src="http://payload175.cargocollective.com/1/12/398889/5818098/06%20Undertow_905.jpg" alt=""/>
            </div>
        </StackGrid>
        <div id="art-button">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
        </div>
      </div>
    );
  }
}

export default sizeMe()(Undertow);

