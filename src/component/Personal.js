import React from 'react';
import MyInfo from '../containers/MyInfo';
import Settings from '../containers/Settings';

// 后加
import '../Personal.css';
import Yunji from './Person/Yunji';
import Avater from './Person/Avater';
import Footer from './Person/Footer';


class Personal extends React.Component {
  render () {
    return(
      <div>
        <Avater />
        <Yunji />
        <Footer />
      </div>
    )
  }
}

export default Personal;
