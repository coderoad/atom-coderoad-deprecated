import * as React from 'react';
import {connect} from 'react-redux';
import {windowToggle} from '../../../actions';
import {onDeactivate} from '../../../atom/subscriptions';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  textAlign: 'center',
  padding: '10px 5px',
};

@connect(null, (dispatch) => {
  return {
    quit: () => {
      dispatch(windowToggle());
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
        style={styles}
        key='quit'
        onClick={this.props.quit}
        >
        quit
      </MenuItem>
    );
  }
}
