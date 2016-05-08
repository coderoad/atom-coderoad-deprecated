import {
  TUTORIALS_FIND, TUTORIAL_UPDATE, TUTORIAL_SET
} from './_types';
import store from '../store';

export function tutorialSet(name: string): Action {
  const {dir} = store.getState();
  return { type: TUTORIAL_SET, payload: {name, dir} };
}

export function tutorialUpdate(name: string): Action {
  return { type: TUTORIAL_UPDATE, payload: { name } };
}

export function tutorialsFind(): Action {
  const {packageJson, dir} = store.getState();
  return { type: TUTORIALS_FIND, payload: { packageJson, dir } };
}
