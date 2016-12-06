import React from 'react';
import Img from '../../images/littlepic/2.png';
import Images from '../../images/littlepic/tp.png';
import Imag1 from '../../images/littlepic/d.png';
import Imag2 from '../../images/littlepic/b.png';
import Imag3 from '../../images/littlepic/x.png';
import '../publish.css';
import {Link} from 'react-router';
import PubBlog from './pubBlog';

class Publish extends React.Component {
  handleSubmit(){
    let value = this.refs.input.value;
    this.setState({value:this.refs.input.value});
  }
  render () {
    return(
      <div className='publish-wrap'>
        <div className='public-top'>
          <h2>上传照片</h2>
          <Link to='PubBlog'><img src={Img} /></Link>
        </div>
        <div className='public-main'>
          <form className='main-top' onSubmit={this.handleSubmit.bind(this)} >
            <textarea placeholder='说点什么...' ref='input' />
          </form>
          <div className='main-main'>
            <Link to='PubBlog'><img src={Images} /><br />点击添加图片</Link>
          </div>
          <div className='main-footer'>
              <Link to='PubBlog'><img src={Imag3} /></Link>
          </div>
        </div>
        <div className='public-footer'>
          <img src={Imag1} /><Link to='PubBlog'>点击获取位置</Link>
          <img className='book' src={Imag2} /><Link to='PubBlog'>添加标签</Link>
        </div>
      </div>
    )
  }
}

export default Publish;
