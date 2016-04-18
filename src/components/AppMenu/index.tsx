import * as React from 'react';
import {connect} from 'react-redux';
import {pageSet, setRoute} from '../../actions';
import {togglePanel} from '../mount';
import {onDeactivate} from '../../atom/subscriptions';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {MenuLink} from './MenuLink';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const origin = {horizontal: 'right', vertical: 'top'};

@connect(null, (dispatch) => {
  return {
    routeToPage: () => {
      const position = this.props.position;
      dispatch(pageSet(position));
      dispatch(setRoute('page'));
    },
    quit: () => {
      togglePanel();
      onDeactivate();
    }
  };
})
export class AppMenu extends React.Component<{
  route: string, position: CR.Position, routeToPage?: any, quit?: any
}, {}> {
  navOptions(): React.ReactElement<{}> {
    const {routeToPage} = this.props;
    switch (this.props.route) {
      case 'final':
      case 'page':
        return <MenuLink route='progress' />;
      case 'progress':
        return (
          <MenuItem
            onTouchTap={routeToPage}
            primaryText='page'
            key='page'
          />
        );
      default: return null;
    }
  }
  menuOptions() {
    switch (this.props.route) {
      case 'final':
      case 'page':
        return (
          <div>
            <MenuLink route='progress'/>
            <MenuLink route='tutorials' />
          </div>
        );
      case 'progress':
        return <MenuLink route='tutorials' />;
      default: return null;
    }
  }
  closePanel() {
    togglePanel();
  }
  render(): React.ReactElement<{}> {
    const {quit} = this.props;
    return (
      <AppBar
        title='CodeRoad'
        className='cr-menu-bar'
        iconElementLeft={
          <IconButton onClick={this.closePanel}>
            <NavigationClose />
          </IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            targetOrigin={origin}
            anchorOrigin={origin}
          >
            {this.menuOptions()}
            {window.coderoad.issuesPath
              ? <MenuItem
                  key='issue'
                  className='link'
                >
                  <a href={window.coderoad.issuesPath}>
                    post issue
                  </a>
                </MenuItem>
              : null}
            <Divider />
            <MenuItem
              key='quit'
              onClick={quit}
            >
              quit
          </MenuItem>
        </IconMenu>
      } />
    );
  }
}
