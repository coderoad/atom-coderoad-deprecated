import {
  TUTORIALS_FIND, TUTORIAL_UPDATE, TUTORIAL_SET
} from './_types';

export function tutorialSet(): CR.Action {
  return { type: TUTORIAL_SET };
}

export function tutorialUpdate(name: string): CR.Action {
  return { type: TUTORIAL_UPDATE, payload: { name } };
}

export function tutorialsFind(): CR.Action {
  return { type: TUTORIALS_FIND };
}
