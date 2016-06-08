import * as React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import CloseWindow from './CloseWindow';
import menuRight from './menuRight';
import {onDeactivate} from '../../subscriptions';

const styles = {
  zIndex: '1',
};

@connect(state => ({
  route: state.route,
}))
export default class AppMenu extends React.Component<{
  route?: string
}, {}> {
  render() {
    const {route} = this.props;
    return (
      <AppBar
        title='CodeRoad'
        className='cr-menu-bar'
        style={{styles}}
        iconElementLeft={<CloseWindow />}
        iconElementRight={menuRight(route)}
      />
    );
  }
}
