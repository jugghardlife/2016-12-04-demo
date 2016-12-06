import React from 'react';
import Img3 from '../../images/home/first/top/1.jpg';
import Img1 from '../../images/home/first/top/2.jpg';
import Img2 from '../../images/home/first/top/3.jpg';
import Swiper from 'swiper';
import "../top.css"

class Top extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {
      initialSlide :1,
      autoplay: 5000,
      pagination: '.swiper-pagination'
    })
  }
  handleTouch(e){
    let dom = this.refs.nopagination;
    if (dom.className.indexOf('swiper-slide-active')!= -1) {

      this.refs.dott.style.display='none';
    }else {
      this.refs.dott.style.display='block';
    }
  }
  render () {
  return(
    <div className="top">
        <div className="swiper-container">
          <div className="swiper-wrapper" onTouchEnd={this.handleTouch.bind(this)}>
              <div className="swiper-slide slide1"><img　src= {Img1}/></div>
              <div className="swiper-slide slide2"><img　src= {Img2}/></div>
              <div className="swiper-slide slide3" ref='nopagination'><img　src= {Img3}/></div>
          </div>
          <div className="swiper-pagination" ref='dott'></div>
      </div>
    </div>
  )
  }
}

export default Top;