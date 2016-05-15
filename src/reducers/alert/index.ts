import {
  ALERT_REPLAY, ALERT_OPEN, ALERT_CLOSE
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
  PASS: '#73C990', // green
  FAIL: '#FF4081', // red
  NOTE: '#9DA5B4', // blue
};

let current: CR.Alert = _alert;

function setAlert(a: CR.Alert): CR.Alert {
  const color = colors[a.action] || colors.NOTE;
  let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
  statusBarAlert.style.color = color;
  current = a;
  return Object.assign({}, open, a);
}

export default function alertReducer(
  alert = _alert, action: Action
): CR.Alert {
  switch (action.type) {

    case ALERT_REPLAY:
      return setAlert(current);

    case ALERT_OPEN:
      return setAlert(action.payload.alert);

    case ALERT_CLOSE:
      return Object.assign({}, alert, {open: false});

    default:
      return alert;
  }
}
