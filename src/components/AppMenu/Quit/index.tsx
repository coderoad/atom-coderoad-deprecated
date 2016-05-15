import * as React from 'react';
import {connect} from 'react-redux';
import {quit} from '../../../actions';
import MenuItem from 'material-ui/MenuItem';
import {onDeactivate} from '../../../atom/subscriptions';

const styles = {
  textAlign: 'center',
  padding: '0px 2px',
};

const Quit = () => (
  <MenuItem
    style={styles}
    key='quit'
    onClick={onDeactivate}
  >
    quit
  </MenuItem>
);
export default Quit;
