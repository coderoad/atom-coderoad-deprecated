import {store} from '../store';
import {ALERT_TOGGLE, ALERT_REPLAY} from './_types';

export function alertToggle(alert?: CR.Alert): CR.Action {
  const isOpen = store.getState().alert.open;
  if (!alert) {
    alert = { message: '', action: '', open: false };
  } else {
    alert = Object.assign({}, { open: !isOpen }, alert);
  }
  return { type: ALERT_TOGGLE, payload: { alert } };
}

export function alertReplay(): CR.Action {
  return { type: ALERT_REPLAY };
}
