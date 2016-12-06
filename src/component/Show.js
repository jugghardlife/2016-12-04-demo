import React from 'react';
import {Link} from 'react-router';
import Shuffling from './shuffling';
import Login from './login';
import Top from '../containers/Top';
import Center from '../containers/Center';
import Recommend from './Recommend';

class Show extends React.Component {
  render () {
    return(
      <div>
        <Top />
        <Center />
        <Recommend />
      </div>
    )
  }
}

export default Show;
