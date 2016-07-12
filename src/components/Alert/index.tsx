import * as React from 'react';
import {connect} from 'react-redux';

import {alertClose} from '../../actions';
import Snackbar from 'material-ui/Snackbar';

const defaultAlert = {
  message: '',
  open: false,
  action: 'NOTE',
};

const styles = {
  display: 'inline-block',
  margin: '0px 10px',
};

@connect(state => ({
  alert: state.alert || defaultAlert,
}), {alertClose})
export default class Alert extends React.Component<{
  alert?: CR.Alert, alertClose?: () => Redux.ActionCreator
}, {}> {
  public render() {
    const {alert, alertClose} = this.props;
    const {action, message, open, duration, color} = alert;
    return (
      <Snackbar
        style={styles}
        bodyStyle={{color}}
        open={open}
        action={action || 'NOTE'}
        message={message || ''}
        autoHideDuration={duration || 2000}
        onActionTouchTap={alertClose}
        onRequestClose={alertClose}
      />
    );
  }
}

Alert.propTypes = {
  alert: React.PropTypes.shape({
    action: React.PropTypes.string,
    message: React.PropTypes.string,
    duration: React.PropTypes.number.optional,
    color: React.PropTypes.string,
  }),
  alertClose: React.PropTypes.func.optional
};
