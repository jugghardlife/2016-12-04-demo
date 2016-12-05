import React from 'react';
import Img1 from '../../images/home/first/midnav/1.jpg'
import Img2 from '../../images/home/first/midnav/2.jpg'
import Img3 from '../../images/home/first/midnav/3.jpg'
import Img4 from '../../images/home/first/midnav/4.jpg'
import Img5 from '../../images/home/first/midnav/5.jpg'
import Img6 from '../../images/home/first/midnav/6.jpg'
import Swiper from 'swiper';
import "../center.css";

class Pichover extends React.Component {
componentDidMount(){
  var mySwiper = new Swiper('.swiper-container',{
     slidesPerView : 2.5,
     spaceBetween : 10
     })
}

  render () {
  return(
    <div　className="center" >
      <div className="swiper-container" >
        <div className="swiper-wrapper" >
            <div className="swiper-slide lide" ><img　src= {Img1}/></div>
            <div className="swiper-slide lide" ><img　src= {Img2}/></div>
            <div className="swiper-slide lide" ><img　src= {Img3}/></div>
            <div className="swiper-slide lide" ><img　src= {Img4}/></div>
            <div className="swiper-slide lide" ><img　src= {Img5}/></div>
            <div className="swiper-slide lide" ><img　src= {Img6}/></div>
        </div>
    </div>
    </div>
  )
  }
}

export default Pichover;
