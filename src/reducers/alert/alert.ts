import * as Type from '../../actions/actionTypes';

const defaultAlert: CR.Alert = {
  message: '',
  open: false,
  action: '',
  duration: 0
};

let current: CR.Alert = defaultAlert;

export default function alertReducer(alert = defaultAlert, action: CR.Action): CR.Alert {
  let statusBarAlert = document.getElementsByClassName('cr-alert-replay')[0];
  switch (action.type) {
    case Type.REPLAY_ALERT:
      return {
        open: true,
        message: current.message,
        action: current.action,
        duration: 2000
      };
    case Type.TOGGLE_ALERT:
      return action.payload.alert || defaultAlert;
    case Type.TEST_RESULT:
      let result = action.payload.result;
      if (result.pass && result.change > 0) {
        // Pass
        statusBarAlert.style.color = '#73C990';
        current = {
          message: result.msg,
          open: true,
          action: 'pass',
          duration: result.duration || 1500
        };
        return current;
      } else if (result.pass === false && result.change < 1) {
        // Fail
        statusBarAlert.style.color = '#FF4081';
        current = {
          message: result.msg,
          open: true,
          action: 'fail',
          duration: result.duration || 2500
        };
        return current;
      } else {
        // Alert
        statusBarAlert.style.color = '#9DA5B4';
        current = {
          message: result.msg,
          open: true,
          action: 'note',
          duration: result.duration || 2500
        };
        return current;
      }
    default:
      return alert;
  }
}
