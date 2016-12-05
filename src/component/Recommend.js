import React from 'react';
import Table from "./Table";

class Recommend extends React.Component {
  constructor(){
    super();
    this.state={
      margin:"",

    }
  }
  leftClick(){
    this.setState({margin:"100vw"})
  }
  rightClick(){
    this.setState({margin:"0"})
  }
  render () {
    return(
      <div>
        <div className="switch">
          <button className="left" onClick={this.leftClick.bind(this)}>展</button>
          <button className="right" onClick={this.rightClick.bind(this)}>文</button>
        </div>
        <div ref="tableSwitch" style={{marginLeft:this.state.margin}}>
          <Table tableClass="tableFist"/>
          <Table tableClass="tableSecend"/>
          <Table tableClass="tableThird"/>
        </div>
      </div>
    )
  }
}

export default Recommend;
