import {SETUP_VERIFY} from './_types';
import {packageSet} from './package';

export function setupVerify(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    dispatch(packageSet());
    const {dir, packageJson} = getState();
    dispatch({ type: SETUP_VERIFY, payload: { dir, packageJson } });
  };
}
