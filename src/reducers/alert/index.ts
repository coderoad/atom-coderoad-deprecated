import {
  ALERT_REPLAY, ALERT_TOGGLE, TUTORIAL_UPDATE,
  TEST_RESULT, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from '../../actions/_types';

const _alert: CR.Alert = {
  message: '',
  open: false,
  action: 'NOTE',
  duration: 1500,
};

const open = {
  open: true,
  action: 'NOTE',
  duration: 1500
};

const colors = {
  PASS: '#73C990',
  FAIL: '#FF4081',
  NOTE: '#9DA5B4',
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
      const a = action.payload.alert;

      if (!a) {
        // close alert
        return _alert;
      }

      return setAlert(a, colors[a.action] || colors.NOTE);

    default:
      return alert;
  }
}
