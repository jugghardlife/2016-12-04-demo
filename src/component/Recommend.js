import React from 'react';
import Table from "./Table";

class Recommend extends React.Component {
  constructor(){
    super();
    this.state={
      data:""
    }
  }
  render () {
    return(
      <div>
        <div ></div>
        <Table tableFist="tableFist"/>
        <Table tableFist="tableSecend"/>
        <Table tableFist="tableThird"/>
      </div>
    )
  }
}

export default Recommend;
