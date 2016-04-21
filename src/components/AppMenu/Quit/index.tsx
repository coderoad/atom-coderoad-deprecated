import * as React from 'react';
import {connect} from 'react-redux';
import {togglePanel} from '../../mount';
import {onDeactivate} from '../../../atom/subscriptions';
import MenuItem from 'material-ui/MenuItem';

@connect(null, (dispatch) => {
  return {
    quit: () => {
      togglePanel();
      onDeactivate();
    }
  };
})
export class Quit extends React.Component<{
  quit?: any
}, {}> {
  render() {
    return (
      <MenuItem
        key='quit'
        onClick={this.props.quit}
        >
        quit
      </MenuItem>
    );
  }
}
