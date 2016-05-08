import {PACKAGE_SET} from './_types';
import store from '../store';

export function packageSet(): Action {
  const {dir} = store.getState();
  return { type: PACKAGE_SET, payload: { dir } };
}
