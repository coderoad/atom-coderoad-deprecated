import {store} from '../store/store';
import {TOGGLE_ALERT, REPLAY_ALERT} from './actionTypes';
const _ = require('lodash');

export function toggleAlert(alert?: CR.Alert): CR.Action {
  const isOpen = store.getState().alert.open;
  if (!alert) {
    alert = { message: '', action: '', open: false };
  } else {
    alert = _.assign(alert, { open: !isOpen });
  }
  return { type: TOGGLE_ALERT, payload: { alert } };
}

export function replayAlert(): CR.Action {
  return { type: REPLAY_ALERT };
}
