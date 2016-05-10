import {
  ALERT_REPLAY, ALERT_TOGGLE, TUTORIAL_UPDATE,
  TEST_RESULT, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from '../../actions/_types';

const _alert: CR.Alert = {
  message: '',
  open: false,
  action: 'note',
  duration: 1500,
};
const open = {
  open: true,
  action: 'note',
  duration: 1500
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
      return setAlert(action.payload.alert || _alert);

    case TUTORIAL_UPDATE:
      return setAlert({
        message: `run \`npm install --save-dev ${action.payload.name}\``,
        duration: 4000,
      });

    case TEST_RESULT:
      const result = action.payload.result;

      switch (action.payload.filter) {

        case 'PASS':
          return setAlert({
            message: result.msg,
            action: 'pass',
            duration: result.duration || 1200,
          }, '#73C990');

        case 'FAIL':
          return setAlert({
            message: result.msg,
            action: 'fail',
            duration: result.duration || 2200,
          }, '#FF4081');
      }
      // Note
      return setAlert({
        message: result.msg,
        duration: result.duration || 2200,
      }, '#9DA5B4');

    default:
      return alert;
  }
}
