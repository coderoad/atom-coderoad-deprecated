import {
  ALERT_REPLAY, ALERT_TOGGLE, TEST_RESULT,
  COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL
} from '../../actions/_types';

const _alert: CR.Alert = {
  message: '',
  open: false,
  action: '',
  duration: 0
};

let current: CR.Alert = _alert;

export default function alertReducer(alert = _alert, action: CR.Action): CR.Alert {
  let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
  switch (action.type) {
    case ALERT_REPLAY:
      return {
        open: true,
        message: current.message,
        action: current.action,
        duration: 2000
      };
    case ALERT_TOGGLE:
      return action.payload.alert || _alert;
    case TEST_RESULT:
      let result = action.payload.result;
      if (result.pass && result.change > 0) {
        // Pass
        statusBarAlert.style.color = '#73C990';
        return {
          message: result.msg,
          open: true,
          action: 'pass',
          duration: result.duration || 1500
        };
      } else if (result.pass === false && result.change < 1) {
        // Fail
        statusBarAlert.style.color = '#FF4081';
        return {
          message: result.msg,
          open: true,
          action: 'fail',
          duration: result.duration || 2500
        };
      }
      // Alert
      statusBarAlert.style.color = '#9DA5B4';
      return {
        message: result.msg,
        open: true,
        action: 'note',
        duration: result.duration || 2500
      };
    case COMPLETE_PAGE:
      return {
        message: `Page ${action.payload.position.page + 1} Complete`,
        open: true,
        action: 'pass',
        duration: 2000
      };
    case COMPLETE_CHAPTER:
      return {
        message: `Chapter ${action.payload.chapter + 1} Complete`,
        open: true,
        action: 'pass',
        duration: 2000
      };
    case COMPLETE_TUTORIAL:
      return {
        message: 'Tutorial Complete',
        open: true,
        action: 'pass',
        duration: 2000
      };
    default:
      return alert;
  }
}
