'use strict';
import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import Snackbar from 'material-ui/Snackbar';
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
export class Alert extends React.Component<{alert: CR.Alert, toggleAlert?: any}, CR.Alert> {
  render() {
    const {alert, toggleAlert} = this.props;
    const {action, open, message, duration} = alert;
    return (
    <Snackbar
          className={classNames('cr-alert', action)}
          open={open || false}
          message={message || ''}
          action={action}
          autoHideDuration={duration || 1500}
          onActionTouchTap={toggleAlert}
          onRequestClose={toggleAlert}
        />
      );
  }
}
