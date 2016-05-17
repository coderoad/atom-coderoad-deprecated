import * as React from 'react';
import {connect} from 'react-redux';
import {quit} from '../../../modules/editor';
import {onDeactivate} from '../../../subscriptions';
import MenuItem from 'material-ui/MenuItem';

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
