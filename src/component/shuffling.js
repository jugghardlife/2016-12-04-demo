import React, { PropTypes } from 'react';
import Swiper from 'swiper';
import img1 from '../images/u1.jpg';
import img2 from '../images/u3.jpg';
import img3 from '../images/u5.jpg';
import img4 from '../images/u8.jpg';
import img5 from '../images/u10.jpg';

class Home extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {

      // 如果需要分页器
      pagination: '.swiper-pagination',
      autoplay: 5000,
    })
  }
  handleTouch(e){
    let dom = this.refs.nopagination;
    if (dom.className.indexOf('swiper-slide-active')!= -1) {
      console.log('000');
      this.refs.dott.style.display='none';
    }else {
      this.refs.dott.style.display='block';
    }
  }
  render () {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper" onTouchEnd={this.handleTouch.bind(this)}>
            <div className="swiper-slide slide1"></div>
            <div className="swiper-slide slide2"></div>
            <div className="swiper-slide slide3"></div>
            <div className="swiper-slide slide4"></div>
            <div className="swiper-slide slide5" ref='nopagination'></div>
        </div>
        <div className="swiper-pagination" ref='dott'></div>
    </div>
    )
  }
}

export default Home;
