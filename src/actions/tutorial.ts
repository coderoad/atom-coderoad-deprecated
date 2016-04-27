import {
  TUTORIALS_FIND, TUTORIAL_UPDATE, TUTORIAL_SET
} from './_types';

export function tutorialSet(name: string): Action {
  return {
    payload: {name},
    type: TUTORIAL_SET,
  };
}

export function tutorialUpdate(name: string): Action {
  return { type: TUTORIAL_UPDATE, payload: { name } };
}

export function tutorialsFind(): Action {
  return { type: TUTORIALS_FIND };
}
