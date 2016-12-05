import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import App from './App.js';
import Show from './component/Show';
import Recommend from './component/Recommend';
import Publish from './component/Publish';
import Personal from './component/Personal';


class Routes extends React.Component {
  render () {
    return(
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Show} />
            <Route path='/recommend' component={Recommend} />
            <Route path='/publish' component={Publish} />
            <Route path='/personal' component={Personal} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Routes;
