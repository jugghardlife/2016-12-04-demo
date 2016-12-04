import React from 'react';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
class NavFooter extends React.Component {
  
  handleTabsChange(value){
    this.context.router.push(value)
  }
  render () {
    return(
      <div className="navfooter">
        <Tabs onChange={this.handleTabsChange.bind(this)} >
            
            <Tab
              icon={<FontIcon  />}
              label="展讯"
              value="/"
            />
            <Tab
              icon={<FontIcon  />}
              label="推荐"
              value="/recommend"
            />
            <Tab
              icon={<FontIcon  />}
              label="发布"
              value="/publish"
            />
            <Tab
              icon={<FontIcon  />}
              label="个人"
              value="/personal"
            />
          </Tabs>
      </div>
    )
  }
}

NavFooter.contextTypes={
  router:React.PropTypes.object.isRequired
}

export default NavFooter;
