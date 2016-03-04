'use strict';
import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {Snackbar} from 'material-ui';
const classNames = require('classnames');

const defaultAlert = {
  open: false,
  message: '',
};

@connect(null, (dispatch) => {
  return {
    toggleAlert: () => {
        dispatch(Action.toggleAlert());
    }
  };
})
export default class extends React.Component<{alert: CR.Alert, toggleAlert?: any}, CR.Alert> {
  render() {
    const {alert, toggleAlert} = this.props;
    return (
    <Snackbar
          className={classNames('cr-alert', alert.action)}
          open={alert.open || false}
          message={alert.message || ''}
          action={alert.action}
          autoHideDuration={alert.duration || 1500}
          onActionTouchTap={toggleAlert}
          onRequestClose={toggleAlert}
        />
      );
  }
}
