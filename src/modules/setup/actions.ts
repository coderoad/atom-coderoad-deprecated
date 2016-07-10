import {SETUP_PACKAGE, SETUP_VERIFY} from './types';

export function setupVerify(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    dispatch(setupPackage());
    const {dir, packageJson} = getState();
    dispatch({ type: SETUP_VERIFY, payload: { dir, packageJson } });
  };
}

export function setupPackage(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir} = getState();
    dispatch({ type: SETUP_PACKAGE, payload: { dir } });
  };
}
