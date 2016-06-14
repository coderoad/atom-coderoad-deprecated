import * as React from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import {routeSet} from '../../../actions';

const styles = {
  textAlign: 'center',
  padding: '0px 2px',
};

@connect(null, {routeSet})
export default class MenuLink extends React.Component<{
  route: string, title?: string, routeSet?: any
}, {}> {
  render() {
    const {route, title, routeSet} = this.props;
    return (
      <MenuItem
        style={styles}
        primaryText={title ? title : route}
        onTouchTap={routeSet.bind(this, route)}
        key={route}
      />
    );
  }
}
