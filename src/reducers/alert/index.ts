import {
  ALERT_REPLAY, ALERT_TOGGLE, TEST_RESULT,
  COMPLETE_PAGE, COMPLETE_TUTORIAL,
  TUTORIAL_UPDATE
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

function setAlert(options) {
  current = Object.assign({}, open, options);
  return current;
}

export default function alertReducer(
  alert = _alert, action: Action
): CR.Alert {
  let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
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
          statusBarAlert.style.color = '#73C990';
          return setAlert({
            message: result.msg,
            duration: result.duration || 1500,
          });
        // Fail
        case result.pass === false && result.change < 1:
          statusBarAlert.style.color = '#FF4081';
          return setAlert({
            message: result.msg,
            action: 'fail',
            duration: result.duration || 2500,
          });
        // Alert
        default:
          statusBarAlert.style.color = '#9DA5B4';
      }
      return setAlert({
        message: result.msg,
        action: 'note',
        duration: result.duration || 2500,
      });

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
