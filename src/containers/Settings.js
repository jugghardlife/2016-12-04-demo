import React from 'react';
import left from '../../images/new/left.png';
import left2 from '../../images/new/left2.png';
import yi from '../../images/new/yi.png';

class Settings extends React.Component {
  constructor(){
    super();
    this.state={
      onOffone:true,
      onOfftwo:true,
      show:false
    }
  }
  handleClickone(){
    this.setState({onOffone: ! this.state.onOffone})
  }
  handleClicktwo(){
    this.setState({onOfftwo: ! this.state.onOfftwo})
  }
  handleShow(){
    this.setState({show:!this.state.show})
  }
  render () {
    let switchOne = this.state.onOffone ? <div className='switch-on-off'>开<span>/关</span></div> :
     <div className='switch-on-off'><span>开/</span>关</div>
     let switchTwo = this.state.onOfftwo ? <div className='switch-on-off'>开<span>/关</span></div> :
      <div className='switch-on-off'><span>开/</span>关</div>;
    let styles={
      root:{
        position:'absolute',
        transition:'all 0.7s',
        top:'0',
        left:this.state.show? '0' : '100%'
      }
    }
    return(
      <div className='per-settings' style={styles.root}>
        <div className='settings-top'>
          <img src={left2} className='return' onClick={this.handleShow.bind(this)}/>
          <img src={yi} className='yi'/>
        </div>
        <div className='settings-options'>
          <ul>
            <li onClick={this.handleClickone.bind(this)}>自动离线缓存
              {switchOne}
            </li>
            <li>WI-FI状态下自动缓存高清作品
              <img src={left} className='next'/>
            </li>
            <li onClick={this.handleClicktwo.bind(this)}>使用流量状态下提醒
              {switchTwo}
            </li>
          </ul>
          <ul>
            <li>推送消息</li>
            <li>意见反馈</li>
            <li>当前版本</li>
            <li>关于艺集</li>
          </ul>
        </div>
        <div className='settings-bot'>
          <button>退出登陆</button>
          <p className='edition'>当前版本{}</p>
        </div>
      </div>
    )
  }
}

export default Settings;
