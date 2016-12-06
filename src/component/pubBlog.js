import React from 'react';

import '../publish.css';


class PubBlog extends React.Component {
  constructor(){
    super();
    this.state={
      value:''
    }
  }
  handleChange(){
    this.props.handleSubmit();
  }
  render () {
    return(
      <div className='pubBlog-wrap' onChange={this.handleChange.bind(this)}>发布成功！</div>
    )
  }
}

export default PubBlog;
