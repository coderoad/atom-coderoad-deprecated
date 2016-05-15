import * as React from 'react';
import {connect} from 'react-redux';
import {quit} from '../../../actions';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  textAlign: 'center',
  padding: '0px 2px',
};

@connect(null, (dispatch) => {
  return {
    quit: () => dispatch(quit())
  };
})
export default class Quit extends React.Component<{
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
