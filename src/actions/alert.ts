import {store} from '../store';
import {ALERT_TOGGLE, ALERT_REPLAY} from './_types';

export function alertToggle(alert?: CR.Alert): Action {
  const isOpen = store.getState().alert.open;
  if (!alert) {
    alert = {
      action: '',
      message: '',
      open: false,
    };
  } else {
    alert = Object.assign({}, { open: !isOpen }, alert);
  }
  return {
    payload: { alert },
    type: ALERT_TOGGLE,
  };
}

export function alertReplay(): Action {
  return { type: ALERT_REPLAY };
}
