import React from 'react';
import Img1 from '../../images/home/first/midnav/1.jpg'
import Img2 from '../../images/home/first/midnav/2.jpg'
import Img3 from '../../images/home/first/midnav/3.jpg'
import Img4 from '../../images/home/first/midnav/4.jpg'
import Img5 from '../../images/home/first/midnav/5.jpg'
import Img6 from '../../images/home/first/midnav/6.jpg'
import Swiper from 'swiper';

class Pichover extends React.Component {
componentDidMount(){
  var mySwiper = new Swiper('.a',{
     slidesPerView : 2,
     spaceBetween : 0,
     loop : true,
     loopAdditionalSlides : 1,
     freeMode : true
     })
}

  render () {
    let styles = {
      width:'100%',
      display:'block',
      height:'auto'
    }
  return(
    <div　className="center" >
      <div className="swiper-container a" >
        <div className="swiper-wrapper" >
            <div className="swiper-slide slide" ><img　src= {Img1} style={styles}/></div>
            <div className="swiper-slide slide" ><img　src= {Img2} style={styles}/></div>
            <div className="swiper-slide slide" ><img　src= {Img3} style={styles}/></div>
            <div className="swiper-slide slide" ><img　src= {Img4} style={styles}/></div>
            <div className="swiper-slide slide" ><img　src= {Img5} style={styles}/></div>
            <div className="swiper-slide slide" ><img　src= {Img6} style={styles}/></div>
        </div>
    </div>
    </div>
  )
  }
}

export default Pichover;
