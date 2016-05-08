import {SETUP_VERIFY} from './_types';
import {packageSet} from './package';
import store from '../store';

export function setupVerify(): Action {
  store.dispatch(packageSet());
  const {dir, packageJson} = store.getState();
  return { type: SETUP_VERIFY, payload: {dir, packageJson} };
}
