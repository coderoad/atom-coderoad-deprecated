import * as React from 'react';
import {connect} from 'react-redux';
import {alertToggle} from '../../actions';
import Snackbar from 'material-ui/Snackbar';

const defaultAlert = {
  message: '',
  open: false,
};

@connect(null, (dispatch) => {
  return {
    alertToggle: () => dispatch(alertToggle()),
  };
})
export default class Alert extends React.Component<{
  alert: CR.Alert, alertToggle?: any
}, {}> {
  render() {
    const {alert, alertToggle} = this.props;
    const {action, open, message, duration} = alert;
    return (
      <Snackbar
          className={`cr-alert ${action}`}
          open={open || false}
          message={message || ''}
          action={action}
          autoHideDuration={duration || 2000}
          onActionTouchTap={alertToggle}
          onRequestClose={alertToggle}
      />
    );
  }
}
