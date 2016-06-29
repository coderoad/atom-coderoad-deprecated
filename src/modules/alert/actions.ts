import {ALERT_REPLAY, ALERT_OPEN, ALERT_CLOSE} from './types';

export function alertOpen(alert: Object): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    dispatch({ type: ALERT_OPEN, payload: { alert } });
  };
}

export function alertReplay(): Action {
  return { type: ALERT_REPLAY };
}

export function alertClose(): Action {
  return { type: ALERT_CLOSE };
}
