import React from 'react';
import {Link} from 'react-router';
import Top from '../containers/Top';
import Center from '../containers/Center';


class Show extends React.Component {
  render () {
  	let styles={
  		root:{
  			display:"flex",
  			flexDirection:"column",
  			flexWrap:"wrap"
  		}
  	}
    return(
      <div >
        <Top />
        <Center />
      </div>
    )
  }
}

export default Show;
