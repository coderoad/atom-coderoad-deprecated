import {ALERT_REPLAY, ALERT_TOGGLE} from './_types';

export function alertToggle(alert: Object, filter?: string): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    dispatch({ type: ALERT_TOGGLE, payload: { alert } });
  };
}

export function alertReplay(): Action {
  return { type: ALERT_REPLAY };
}
