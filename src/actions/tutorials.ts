import * as Type from './actionTypes';

export function loadTutorials(): CR.Action {
  return { type: Type.LOAD_TUTORIALS };
}

export function updateTutorial(name: string): CR.Action {
  return { type: Type.UPDATE_TUTORIAL, payload: { name } };
}
