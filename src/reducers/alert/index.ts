import {
  ALERT_REPLAY, ALERT_TOGGLE, TUTORIAL_UPDATE,
  TEST_RESULT, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from '../../actions/_types';

const _alert: CR.Alert = {
  message: '',
  open: false,
  action: '',
};
const open = {
  open: true,
  action: 'pass',
};

let current: CR.Alert = _alert;

function setAlert(options: Object, color?: string) {
  if (color) {
    let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
    statusBarAlert.style.color = color;
  }
  current = Object.assign({}, open, options);
  return current;
}

export default function alertReducer(
  alert = _alert, action: Action
): CR.Alert {
  switch (action.type) {

    case ALERT_REPLAY:
      return setAlert(current);

    case ALERT_TOGGLE:
      return action.payload.alert || _alert;

    case TUTORIAL_UPDATE:
      return setAlert({
        message: `run \`npm install --save-dev ${action.payload.name}\``,
        action: 'note',
        duration: 4000,
      });

    case TEST_RESULT:
      const result = action.payload.result;

      switch (true) {
        // pass
        case result.pass && result.change > 0:
          return setAlert({
            message: result.msg,
            duration: result.duration || 1500,
          }, '#73C990');
        // Fail
        case result.pass === false && result.change < 1:
          return setAlert({
            message: result.msg,
            action: 'fail',
            duration: result.duration || 2500,
          }, '#FF4081');
        // Alert
        default:
          break;
      }
      return setAlert({
        message: result.msg,
        action: 'note',
        duration: result.duration || 2500,
      }, '#9DA5B4');

    case COMPLETE_PAGE:
      return setAlert({
        message: `Page ${action.payload.pagePosition + 1} Complete`,
      });

    case COMPLETE_TUTORIAL:
      return setAlert({
        message: 'Tutorial Complete',
      });

    default:
      return alert;
  }
}
