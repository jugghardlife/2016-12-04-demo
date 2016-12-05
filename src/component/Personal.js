import React from 'react';
import MyInfo from '../containers/MyInfo';
import Settings from '../containers/Settings';

class Personal extends React.Component {
  render () {
    return(
      <div>
        Personal
        <Settings />
      </div>
    )
  }
}

export default Personal;
