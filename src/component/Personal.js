import React from 'react';
import MyInfo from '../containers/MyInfo';
import Settings from '../containers/Settings';

import Paper from 'material-ui/Paper';
import '../Personal.css';

class Personal extends React.Component {
  render () {
    let style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: 'red'
    }
    return(
      <div className='Personal-wrap'>
        <div className='head-wrap'>
          <Paper style={style} zDepth={1} circle={true} />
          <h3>阴雨天</h3>
        </div>
      </div>
    )
  }
}

export default Personal;
