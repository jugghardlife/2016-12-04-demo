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
  
  handleTabsChange(to){
    this.context.router.push(to)
  }
  render () {
    let styles={
      img3:{
        marginTop:"0.7rem"
      }
    }
    
    return(
      <div className="navfooter">
            <Link to="/" activeStyle={{color:"#fff"}} onlyActiveOnIndex={true}><span><img src={img8} /><img src={img9} className="none" /></span></Link>
            <Link to="/recommend" activeStyle={{color:"#fff"}}><span><img src={img7} /><img src={img6} className="none" /></span></Link>
            <Link to="/publish" activeStyle={{color:"#fff"}}><span><img src={img3} style={styles.img3} /><img style={styles.img3} src={img2} className="none" /></span></Link>
            <Link to="/personal" activeStyle={{color:"#fff"}}><span><img src={img5} /><img src={img4} className="none" /></span></Link>
      </div>
    )
  }
}

NavFooter.contextTypes={
  router:React.PropTypes.object.isRequired
}

export default NavFooter;
