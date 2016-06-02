import {SETUP_VERIFY, SETUP_PACKAGE} from './types';

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
