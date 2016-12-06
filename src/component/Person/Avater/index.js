import React from 'react';

class Avater extends React.Component {
  handleClick(){
    this.props.settings()
  }
  handleAvater(){
    alert('bbb')
  }
  render () {
    return(
      <div className='Personal-wrap'>
        <div className='head-wrap'>
          <span className="glyphicon glyphicon-cog" onClick={this.handleClick.bind(this)}></span>
          <img onClick={this.handleAvater.bind(this)} className='st-wrap' />
          <h3 className='st-wrapp'>阴雨天</h3>
          <div className='st-wrappp'>
            <div><span>关注</span><br/><span>276</span></div>
            <div><span>发布</span><br/><span>243</span></div>
            <div><span>访客</span><br/><span>256</span></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Avater;
