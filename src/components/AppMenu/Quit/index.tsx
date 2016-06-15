import * as React from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import {quit} from '../../../actions';

const styles = {
    menuItem: {
    textAlign: 'center',
    padding: '0px 2px',
  },
};

@connect(null, {quit})
export default class Quit extends React.Component<{
  quit?: () => Redux.ActionCreator
}, {}> {
  render() {
    return (
      <MenuItem
        style={styles.menuItem}
        key='quit'
        onClick={this.props.quit}
      >
        quit
      </MenuItem>
    );
  }
}
