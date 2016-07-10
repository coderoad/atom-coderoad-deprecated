import {ALERT_CLOSE, ALERT_OPEN, ALERT_REPLAY} from './types';

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
