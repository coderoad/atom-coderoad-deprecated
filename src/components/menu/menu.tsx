'use strict';
import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {togglePanel} from '../render';
import {onDeactivateSubscriptionsAndUnmount} from '../../atom/subscriptions';

import {AppBar, IconButton, IconMenu, MenuItem, ListDivider} from 'material-ui';
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
        return <button onTouchTap={this.props.routeToProgress}>progress</button>;
      case 'progress':
        return <button onTouchTap={this.props.routeToPage}>page</button>;
      default: return null;
    }
  }
  menuOptions() {
    switch (this.props.route) {
      case 'page':
        return (
          <div>
        <MenuItem primaryText='progress' onTouchTap={this.props.routeToProgress} key='progress' />
        <MenuItem primaryText='projects' onTouchTap={this.props.routeToProjects} key='projects' />
      </div>);
      case 'progress':
        return <MenuItem primaryText='projects' onTouchTap={this.props.routeToProjects} key='projects' />;
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
              iconElementLeft={<IconButton onTouchTap={this.closePanel}><NavigationClose /></IconButton>}
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
        {window.coderoad.issuesPath ? <MenuItem key='issue'>
          <a href={window.coderoad.issuesPath}>
            post issue
          </a>
          </MenuItem> : null}

        <ListDivider />
        <MenuItem primaryText='quit' onTouchTap={this.props.quit}/>

      </IconMenu>
    } />
  );
  }
}
