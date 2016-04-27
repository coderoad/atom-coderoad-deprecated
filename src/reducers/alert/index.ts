import {
  ALERT_REPLAY, ALERT_TOGGLE, TEST_RESULT,
  COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL,
  TUTORIAL_UPDATE
} from '../../actions/_types';

const _alert: CR.Alert = {
  message: '',
  open: false,
  action: '',
};
const open = {
  open: true,
  pass: true,
};

let current: CR.Alert = _alert;

export default function alertReducer(
  alert = _alert, action: Action
): CR.Alert {
  let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
  switch (action.type) {
    case ALERT_REPLAY:
      return Object.assign({}, current, open);
    case ALERT_TOGGLE:
      return action.payload.alert || _alert;
    case TUTORIAL_UPDATE:
      current = Object.assign({}, {
        message: `run \`npm install --save-dev ${action.payload.name}\``,
        action: 'note',
        duration: 4000,
      }, open);
      return current;
    case TEST_RESULT:
      let result = action.payload.result;
      if (result.pass && result.change > 0) {
        // Pass
        statusBarAlert.style.color = '#73C990';
        current = Object.assign({}, {
          message: result.msg,
          duration: result.duration || 1500,
        }, open);
        return current;
      } else if (result.pass === false && result.change < 1) {
        // Fail
        statusBarAlert.style.color = '#FF4081';
        current = Object.assign({}, {
          message: result.msg,
          action: 'fail',
          duration: result.duration || 2500,
        }, open);
        return current;
      }
      // Alert
      statusBarAlert.style.color = '#9DA5B4';
      current = Object.assign({}, {
        message: result.msg,
        action: 'note',
        duration: result.duration || 2500,
      }, open);
      return current;
    case COMPLETE_PAGE:
      current = Object.assign({}, {
        message: `Page ${action.payload.position.page + 1} Complete`,
      }, open);
      return current;
    case COMPLETE_CHAPTER:
      current = Object.assign({}, {
        message: `Chapter ${action.payload.chapter + 1} Complete`,
      }, open);
      return current;
    case COMPLETE_TUTORIAL:
      current = Object.assign({}, {
        message: 'Tutorial Complete',
      }, open);
      return current;
    default:
      return alert;
  }
}
