import {ALERT_TOGGLE, ALERT_REPLAY} from './_types';

export function alertToggle(alert?: CR.Alert): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const isOpen = getState().alert.open;
    if (!alert) {
      alert = {
        action: '',
        message: '',
        open: false,
      };
    } else {
      alert = Object.assign({}, { open: !isOpen }, alert);
    }
    dispatch({ type: ALERT_TOGGLE, payload: { alert } });
  };
}

export function alertReplay(): Action {
  return { type: ALERT_REPLAY };
}
