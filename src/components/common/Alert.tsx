import * as React from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {alertClose} from '../../actions';

const defaultAlert = {
  message: '',
  open: false,
};

const styles = {
  display: 'inline-block',
  margin: '0px 10px',
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
    const {action, message, open, duration, color} = alert;
    return (
      <Snackbar
          style={styles}
          bodyStyle={{color}}
          open={open}
          message={message || ''}
          action={action || ''}
          autoHideDuration={duration || 2000}
          onActionTouchTap={close}
          onRequestClose={close}
      />
    );
  }
}
