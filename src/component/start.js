import React from 'react'
import Shuffling from './shuffling'
import Login from './login'
import Routes from '../routes.js';
class Start extends React.Component {
  constructor(){
      super()
      this.state={
        show:0
      }
    }
  handleClick(){
    this.setState({
      show:1
    })
  }
  handleClick1(){
    this.setState({
      show:2
    })
  }
  render () {
    return (
      <div>
        {this.state.show==0?<Shuffling xxx={this.handleClick.bind(this)}/>:
          this.state.show==1?<Login xxx={this.handleClick1.bind(this)}/>:<Routes />
        }
      </div>
    )
  }
}

export default Start;
