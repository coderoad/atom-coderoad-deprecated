import {ALERT_CLOSE, ALERT_OPEN, ALERT_REPLAY} from './types';

export function alertOpen(alert: Object): Redux.ThunkAction<any, {}, {}> {
  return (dispatch): void => {
    dispatch({ type: ALERT_OPEN, payload: { alert } });
  };
}

export function alertReplay(): Action {
  return { type: ALERT_REPLAY };
}

export function alertClose(): Action {
  return { type: ALERT_CLOSE };
}
