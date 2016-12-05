import React from "react";
import {Link} from "react-router";


class Table extends React.Component{
  render(){
    return(
      <div  className="tableWrap" >
        <a className={this.props.tableFist}>
          <p>剩余时间</p>
          <h3>qweqweq</h3>
          <h5>qweqweqw</h5>
          <h5>qweqweqwe</h5>
          <div className="table-bottom">
            <span className="glyphicon glyphicon-share" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-cloud" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-eye-open" aria-hidden="true">11</span>
            <span className="glyphicon glyphicon-list-alt" aria-hidden="true">11</span>
          </div>
        </a>
      </div>
    )
  }
}


export default Table;
