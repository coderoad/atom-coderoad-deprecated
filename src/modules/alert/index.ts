import {ALERT_CLOSE,  ALERT_OPEN, ALERT_REPLAY} from './types';

// alert styles
export const colors = {
  PASS: '#73C990', // green
  FAIL: '#FF4081', // red
  NOTE: '#9DA5B4', // blue
};

// default alert
export const _alert: CR.Alert = {
  message: '',
  open: false,
  action: 'NOTE',
  duration: 1500,
  color: colors.NOTE
};

const open = {
  open: true,
  action: 'NOTE',
  duration: 1500
};

let current: CR.Alert = _alert;
/**
 * sets alert color on snackbar DOM element
 * @param  {CR.Alert} a alert
 * @returns CR.Alert alert
 */
function setAlert(a: CR.Alert): CR.Alert {
  a.color = colors[a.action] || colors.NOTE;
  let statusBarAlert = <HTMLElement>document.getElementsByClassName('cr-alert-replay')[0];
  statusBarAlert.style.color = a.color;
  current = a;
  return Object.assign({}, open, a);
}

/**
 * snackbar Alert reducer
 * @param  {} alert=_alert
 * @param  {Action} action { type: string, payload: { alert } }
 * @returns CR.Alert alert
 */
export default function alert(
  alert = _alert, action: Action
): CR.Alert {
  switch (action.type) {

    case ALERT_REPLAY:
      return setAlert(current);

    case ALERT_OPEN:
      return setAlert(action.payload.alert);

    case ALERT_CLOSE:
      return Object.assign({}, alert, { open: false });

    default:
      return alert;
  }
}
