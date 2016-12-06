import React from 'react';
// import qq from '../../images/fonts/qq.png';
// import wb from '../../images/fonts/wb.png';
// import wx from '../../images/fonts/wx.png';
class Login extends React.Component {
  render () {
    return(
      <div className="wrap">
        <div className="box">
          <form>
            <input type="text" placeholder="点击输入手机号/Email登陆"/>
            <input type="text" placeholder="输入密码"/>
          </form>
        </div>
        <div className="box1">
          <button onClick={this.props.xxx}>登陆</button>
          <button>注册</button>
        </div>
        <p><input type="checkbox" className="inp"/> 登陆或注册即同意艺集<span>用户服务协议</span></p>
        <div className="box2">
          <a><img src={require('../../images/fonts/wb.png')} /><br/>微博</a>
          <a id="aa"><img src={require('../../images/fonts/wx.png')} /><br/>微信</a>
          <a><img src={require('../../images/fonts/qq.png')} /><br/>QQ</a>
        </div>
      </div>
    )
  }
}

export default Login;
