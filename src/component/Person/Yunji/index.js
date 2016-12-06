import React from 'react';
import {Link} from 'react-router';

class Yunji extends React.Component {
  render () {
    return(
      <div className='main-warp'>
        <div className='h-warp'>
          <h3 className='yixiang-left'>艺象云集</h3>
          <div className='yixiang-right'>
            <p className='yixiang-p'>ALL</p>
            <p className="yixiang-p yixiang-p1 glyphicon glyphicon-chevron-right"></p>
          </div>
        </div>
        <div className='dingyue'>
          <div>
            <Link to='/Zhanxu' onlyActiveOnIndex={true}>
              <div className='dingyue-wrap dingyue-wrap1'>
                <h3>展讯</h3>
              </div>
            </Link>
            <p>订阅/23</p>
          </div>
          <div>
            <Link to='/Wenzhang' onlyActiveOnIndex={true}>
              <div className='dingyue-wrap dingyue-wrap2'>
                <h3>文章</h3>
              </div>
            </Link>
            <p>订阅/43</p>
          </div>
          <div>
            <Link to='/Zuoping' onlyActiveOnIndex={true}>
              <div className='dingyue-wrap dingyue-wrap3'>
                <h3>作品</h3>
              </div>
            </Link>
            <p>订阅/56</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Yunji;
// constructor(){
//     super();
//     this.state={
//       data:[],
//       wait:true
//     }
//   }
//   componentDidMount(){
//     axios.get('https://raw.githubusercontent.com/richardjoin/08-demo/master/data/blogcard.json?a='+Math.random())
//     .then( res => this.setState({data:res.data,wait:false}) )
//     // 网页刷新不出来显示的
//     .catch( err=> alert(err))
//   }
//   render () {
//     return(
//       <div className='blog-warp'>
//         {this.state.wait ? <Loading /> :
//           this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> )
//         }
//       </div>
