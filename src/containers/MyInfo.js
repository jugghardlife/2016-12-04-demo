import React from 'react';

import left from '../../images/new/left.png';
import left2 from '../../images/new/left2.png';
import yi from '../../images/new/yi.png';

class MyInfo extends React.Component {
  render () {
    return(
      <div className='per-settings'>
        <div className='settings-top'>
          <img src={left2} className='return'/>
          <img src={yi} className='yi'/>
        </div>
        <div className='settings-options'>
          <ul>
            <li>头像
              <img src={left} className='next'/>
            </li>
            <li>背景
              <img src={left} className='next'/>
              <span className='small-title'>更换</span>
            </li>
            <li>名字
              <img src={left} className='next'/>
              <span className='small-title'>阴雨天</span>
            </li>
          </ul>
          <ul>
            <li>我的二维码
              <img src={left} className='next'/>
            </li>
            <li>我的地址
              <img src={left} className='next'/>
              <span className='small-title'>北京市 海淀区</span>
            </li>
            <li>隐私
              <img src={left} className='next'/>
            </li>
          </ul>
        </div>
        <div className='settings-bot'>
          <p className='warn'>为保护用户隐私，请您尽量选择默认隐私设置</p>
        </div>
      </div>
    )
  }
}

export default MyInfo;
