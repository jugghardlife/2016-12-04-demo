import React from 'react';
import NavFooter from "./containers/NavFooter";
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends React.Component {
  getChildContext() {
	    return {muiTheme: getMuiTheme()};
   }
  render () {
    return(
      <div>
      	<div>
        	{this.props.children}
      	</div>
        <NavFooter />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
