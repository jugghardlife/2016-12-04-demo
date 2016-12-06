import React from 'react';

class Footer extends React.Component {
  constructor(){
    super();
    this.state={
      index:0
    }
  }
  handleClick(n){
    this.setState({index:n})
  }
  render () {
    let style = {
      backgroundColor: 'red',
      borderRadius: '0 20px 20px 0'
    }
    let styles = {
      backgroundColor: 'red',
      borderRadius: '20px 0 0 20px'
    }
    return(
      <div>
        <div className='footer-top'>
          <p className='footer-p1' onClick={this.handleClick.bind(this,0)} style={this.state.index==0 ? style : null}>原创</p>
          <p className='footer-p2' onClick={this.handleClick.bind(this,1)} style={this.state.index==1 ? styles : null}>缓存</p>
        </div>
          {this.state.index==0?
            <div className='footer-bottom'>
              <div className='footer-img footer-img1'></div>
              <div className='footer-img footer-img2'></div>
            </div> :
            <div className='footer-bottom'>
              <div className='footer-img footer-img2'></div>
              <div className='footer-img footer-img1'></div>
            </div>
        }
      </div>
    )
  }
}
export default Footer;
