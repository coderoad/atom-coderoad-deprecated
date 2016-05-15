import * as React from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {alertClose} from '../../actions';

const defaultAlert = {
  message: '',
  open: false,
};

@connect(null, dispatch => {
  return {
    close: () => dispatch(alertClose())
  };
})
export default class Alert extends React.Component<{
  alert: CR.Alert, close?: any
}, {}> {
  render() {
    const {alert, close} = this.props;
    const {action, message, open, duration} = alert;
    return (
      <Snackbar
          className={`cr-alert ${action}`}
          open={open}
          message={message || ''}
          action={action || 'NOTE'}
          autoHideDuration={duration || 2000}
          onRequestClose={close}
      />
    );
  }
}
