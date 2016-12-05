import React from 'react';
import {Link} from 'react-router';
import "../navFooter.css";
import img2 from "../../images/littlepic/2.png";
import img3 from "../../images/littlepic/3.png";
import img4 from "../../images/littlepic/4.png";
import img5 from "../../images/littlepic/5.png";
import img6 from "../../images/littlepic/6.png";
import img7 from "../../images/littlepic/7.png";
import img8 from "../../images/littlepic/8.png";
import img9 from "../../images/littlepic/9.png";
class NavFooter extends React.Component {
  constructor(){
    super();
    this.state={
      switch:true
    }
  }
  
  render () {
    let styles={
      imgA:{
        display: this.state.switch == 1 ? "none" : "block"
      },
      imgB:{
        display: this.state.switch == 2 ? "none" : "block"
      },
      imgC:{
        display: this.state.switch == 3 ? "none" : "block"
      },
      imgD:{
        display: this.state.switch == 4 ? "none" : "block"
      }
    }
    
    return(
      <div className="navfooter">
            <Link to="/" activeStyle={{color:"#fff"}} onlyActiveOnIndex={true}>
              <div onClick={ () => this.setState({switch:1}) }>
              <img style={styles.imgA}  src={img8} className="one" />
              <img   src={img9} className="two" /></div>
            </Link>
            <Link to="/recommend" activeStyle={{color:"#fff"}}>
              <div onClick={ () => this.setState({switch:2}) }>
              <img style={styles.imgB}  src={img7} className="three" />
              <img   src={img6} className="four" /></div>
            </Link>
            <Link to="/publish" activeStyle={{color:"#fff"}}>
              <div onClick={ () => this.setState({switch:3}) }>
              <img style={styles.imgC}  src={img3} className="five" />
              <img   src={img2} className="six" /></div>
            </Link>
            <Link to="/personal" activeStyle={{color:"#fff"}}>
              <div onClick={ () => this.setState({switch:4}) }>
              <img style={styles.imgD}  src={img5} className="seven" />
              <img   src={img4} className="eight" /></div>
            </Link>
      </div>
    )
  }
}


export default NavFooter;
