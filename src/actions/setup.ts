import {SETUP_VERIFY} from './_types';
import {packageSet} from './package';
import {store} from '../store';

export function setupVerify(): CR.Action {
  store.dispatch(packageSet());
  return { type: SETUP_VERIFY };
}
