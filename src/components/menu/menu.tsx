'use strict';
import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {togglePanel} from '../render';
import {onDeactivateSubscriptionsAndUnmount} from '../../atom/subscriptions';

import {AppBar, IconButton, IconMenu, MenuItem, Divider} from 'material-ui';
let MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
let NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
// let Feedback = require('material-ui/lib/svg-icons/action/feedback');

/**
 * Menu Component
 * 	title
 * 	navigation
 */
@connect(null, (dispatch) => {
  return {
    routeToProgress: () => dispatch(Action.setRoute('progress')),
    routeToPage: () => {
      const position = this.props.position;
      dispatch(Action.setPage(position));
      dispatch(Action.setRoute('page'));
    },
    routeToProjects: () => dispatch(Action.setRoute('projects')),
    quit: () => {
      togglePanel();
      onDeactivateSubscriptionsAndUnmount();
    }
  };
})
export default class extends React.Component<{
  route: string, position: CR.Position, routeToProgress?: any, routeToPage?: any, routeToProjects?: any, quit?: any
}, {}> {
  navOptions(): React.ReactElement<{}> {
    switch (this.props.route) {
      case 'page':
        return <button onClick={this.props.routeToProgress}>progress</button>;
      case 'progress':
        return <button onClick={this.props.routeToPage}>page</button>;
      default: return null;
    }
  }
  menuOptions() {
    switch (this.props.route) {
      case 'page':
        return (
          <div>
        <MenuItem primaryText='progress' onClick={this.props.routeToProgress} />
        <MenuItem primaryText='projects' onClick={this.props.routeToProjects} />
      </div>);
      case 'progress':
        return <MenuItem primaryText='projects' onClick={this.props.routeToProjects} />;
      default: return null;
    }
  }
  closePanel() {
    togglePanel();
  }
  render(): React.ReactElement<{}> {
    return (
      <AppBar title={'CodeRoad'}
              className='cr-menu-bar'
              iconElementLeft={<IconButton onClick={this.closePanel}><NavigationClose /></IconButton>}
              iconElementRight={
              <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        {/* Menu Items */}
        {this.menuOptions()}
        {}
        {global.coderoad.issuesPath ? <MenuItem>
          <a href={global.coderoad.issuesPath}>
            post issue
          </a>
          </MenuItem> : null}

        <Divider />
        <MenuItem primaryText='quit' onClick={this.props.quit}/>

      </IconMenu>
    } />
  );
  }
}
