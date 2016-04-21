import {
  ALERT_REPLAY, ALERT_TOGGLE, TEST_RESULT,
  COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL
} from '../../actions/_types';

const _alert: CR.Alert = {
  message: '',
  open: false,
  action: '',
};

let current: CR.Alert = _alert;

export default function alertReducer(
  alert = _alert, action: Action
): CR.Alert {
  let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
  switch (action.type) {
    case ALERT_REPLAY:
      return Object.assign({}, current, {open: true});
    case ALERT_TOGGLE:
      return action.payload.alert || _alert;
    case TEST_RESULT:
      let result = action.payload.result;
      if (result.pass && result.change > 0) {
        // Pass
        statusBarAlert.style.color = '#73C990';
        current = {
          message: result.msg,
          open: true,
          action: 'pass',
          duration: result.duration || 1500,
        };
        return current;
      } else if (result.pass === false && result.change < 1) {
        // Fail
        statusBarAlert.style.color = '#FF4081';
        current = {
          message: result.msg,
          open: true,
          action: 'fail',
          duration: result.duration || 2500,
        };
        return current;
      }
      // Alert
      statusBarAlert.style.color = '#9DA5B4';
      current = {
        message: result.msg,
        open: true,
        action: 'note',
        duration: result.duration || 2500,
      };
      return current;
    case COMPLETE_PAGE:
      current = {
        message: `Page ${action.payload.position.page + 1} Complete`,
        open: true,
        action: 'pass',
      };
      return current;
    case COMPLETE_CHAPTER:
      current = {
        message: `Chapter ${action.payload.chapter + 1} Complete`,
        open: true,
        action: 'pass',
      };
      return current;
    case COMPLETE_TUTORIAL:
      current = {
        message: 'Tutorial Complete',
        open: true,
        action: 'pass',
      };
      return current;
    default:
      return alert;
  }
}
