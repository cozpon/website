import React, { Component } from 'react';
import Header from '../../components/header.component';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';
import LazyLoad from 'react-lazyload';

class MotoTrip extends Component {
  render() {
    const { width } = this.props.size;
    return (
      <div>
        <Header />
        <StackGrid
          columnWidth={width <= 800 ? '100%' : '50%'}
          monitorImagesLoaded={true} >
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/26.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/1.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/25.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/2.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/3.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/4.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/5.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/6.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/7.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/text2.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/9.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/10.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/11.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/12.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/8.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/13.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/14.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/15.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/16.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/17.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/18.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/19.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/20.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/22.jpg" alt=""/></LazyLoad>
          </div>
          <div><LazyLoad throttle={200} height={300}>
            <img src="/images/23.jpg" alt=""/></LazyLoad>
          </div>
          </StackGrid>
          <div>
            <img src="/images/24.jpg" alt=""/>
          </div>
      </div>
    );
  }
}

export default sizeMe()(MotoTrip);

