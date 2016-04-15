import {
  REPLAY_ALERT, TOGGLE_ALERT, TEST_RESULT,
  PAGE_COMPLETE, CHAPTER_COMPLETE, PROJECT_COMPLETE
} from '../../actions/actionTypes';

const defaultAlert: CR.Alert = {
  message: '',
  open: false,
  action: '',
  duration: 0
};

let current: CR.Alert = defaultAlert;

export default function alertReducer(alert = defaultAlert, action: CR.Action): CR.Alert {
  let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
  switch (action.type) {
    case REPLAY_ALERT:
      return {
        open: true,
        message: current.message,
        action: current.action,
        duration: 2000
      };
    case TOGGLE_ALERT:
      return action.payload.alert || defaultAlert;
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
    case PAGE_COMPLETE:
      return {
        message: `Page ${action.payload.position.page + 1} Complete`,
        open: true,
        action: 'pass',
        duration: 2000
      };
    case CHAPTER_COMPLETE:
      return {
        message: `Chapter ${action.payload.chapter + 1} Complete`,
        open: true,
        action: 'pass',
        duration: 2000
      };
    case PROJECT_COMPLETE:
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
