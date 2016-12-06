import React from 'react';

import MyInfo from '../containers/MyInfo';
import Settings from '../containers/Settings';

// 后加
import '../Personal.css';
import Yunji from './Person/Yunji';
import Avater from './Person/Avater';
import Footer from './Person/Footer';

class Personal extends React.Component {
  handleSettings(){
    this.refs.settings.handleShow()
  }
  render () {
    return(
      <div>
        <Avater settings={this.handleSettings.bind(this)}/>
        <Yunji />
        <Footer />
        <Settings ref='settings'/>
      </div>
    )
  }
}

export default Personal;
