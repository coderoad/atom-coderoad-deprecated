import {store} from '../_base';
import * as Type from './actionTypes';
const _ = require('lodash');

export function toggleAlert(alert?: cr.Alert): Action {
  const isOpen = store.getState().alert.open;
  if (!alert) {
    alert = { message: '', action: '', open: false };
  } else {
    alert = _.assign(alert, { open: !isOpen });
  }
  return { type: Type.TOGGLE_ALERT, payload: { alert } };
}

export function replayAlert(): Action {
  return { type: Type.REPLAY_ALERT };
}
