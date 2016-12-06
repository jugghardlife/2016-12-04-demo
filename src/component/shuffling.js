import React, { PropTypes } from 'react';
import Swiper from 'swiper';
import {Link} from 'react-router';
import img1 from '../../images/loading/1.jpg';
import img2 from '../../images/loading/2.jpg';
import img3 from '../../images/loading/3.jpg';
import img4 from '../../images/loading/4.jpg';
import img5 from '../../images/loading/5.png';

class Shuffling extends React.Component {
  constructor(){
      super()
      this.state={
        data:""
      }
    }
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {

      // 如果需要分页器
      pagination: '.swiper-pagination',
    })
    var d = new Date();
    var str = "-" +d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()+ "-" ;
    this.setState({
      data:str
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
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper" onTouchEnd={this.handleTouch.bind(this)}>
            <div className="swiper-slide slide1"></div>
            <div className="swiper-slide slide2"></div>
            <div className="swiper-slide slide3"></div>
            <div className="swiper-slide slide4"></div>
            <div className="swiper-slide slide5" ref='nopagination'>
              <p style={{display:"block",marginTop: "70vh",textAlign: "center",color:"#666"}}>{this.state.data}</p>
              <p style={{display:"block",marginTop: "20vh",textAlign: "center",color:"#666",textDecoration:"none"}} onClick={this.props.xxx}>今日推送 >></p>
            </div>
        </div>
        <div className="swiper-pagination" ref='dott'></div>
    </div>
    )
  }
}

export default Shuffling;
