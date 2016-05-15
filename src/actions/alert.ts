import {ALERT_REPLAY, ALERT_TOGGLE} from './_types';

export function alertToggle(alert: Object): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    dispatch({ type: ALERT_TOGGLE, payload: { alert } });
  };
}

export function alertReplay(): Action {
  return { type: ALERT_REPLAY };
}

// import {rat} from 'redux-action-thunk';
//
// rat.add('ALERT_TOGGLE', (dispatch, getState) => (alert) => {
//   dispatch({ type: 'ALERT_TOGGLE', payload: { alert } });
// });
//
// rat.add('ALERT_REPLAY');
