import * as React from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import {pageSet, routeSet} from '../../../actions';

const styles = {
  textAlign: 'center',
  padding: '10px 5px',
};

@connect(null, (dispatch) => {
  return {
    routeTo: (route: string) => dispatch(routeSet(route)),
  };
})
export class MenuLink extends React.Component<{
  route: string, title?: string, routeTo?: any
}, {}> {
  render() {
    const {route, title, routeTo} = this.props;
    return (
      <MenuItem
        style={styles}
        primaryText={title ? title : route}
        onTouchTap={routeTo.bind(this, route)}
        key={route}
      />
    );
  }
}
