import {LOAD_TUTORIALS, UPDATE_TUTORIAL} from './actionTypes';

export function loadTutorials(): CR.Action {
  return { type: LOAD_TUTORIALS };
}

export function updateTutorial(name: string): CR.Action {
  return { type: UPDATE_TUTORIAL, payload: { name } };
}
