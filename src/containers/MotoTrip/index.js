import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class MotoTrip extends Component {
  render() {
    const { width } = this.props.size;
    return (
      <div>
        <Header />
        <StackGrid
          columnWidth={width <= 800 ? '100%' : '50%'}
          monitorImagesLoaded={true} >
          <div>
            <img src="/images/1.jpg"/>
          </div>
          <div>
            <img src="/images/2.jpg"/>
          </div>
          <div>
            <img src="/images/3.jpg"/>
          </div>
          <div>
            <img src="/images/4.jpg"/>
          </div>
          <div>
            <img src="/images/5.jpg"/>
          </div>
          <div>
            <img src="/images/6.jpg"/>
          </div>
          <div>
            <img src="/images/7.jpg"/>
          </div>
          <div>
            <img src="/images/8.jpg"/>
          </div>
          <div>
            <img src="/images/9.jpg"/>
          </div>
          <div>
            <img src="/images/10.jpg"/>
          </div>
          <div>
            <img src="/images/11.jpg"/>
          </div>
          <div>
            <img src="/images/12.jpg"/>
          </div>
          <div>
            <img src="/images/text.jpg"/>
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

