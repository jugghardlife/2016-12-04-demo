import React from 'react';

class Footer extends React.Component {
  render () {
    return(
      <div>
        <div className='footer-top'>
          <p className='footer-p1'>原创</p>
          <p className='footer-p2'>缓存</p>
        </div>
        <div className='footer-bottom'>
          <div className='footer-img footer-img1'></div>
          <div className='footer-img footer-img2'></div>
        </div>
      </div>
    )
  }
}
export default Footer;
