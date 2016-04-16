import {
  LOAD_TUTORIALS, UPDATE_TUTORIAL, SET_TUTORIAL_INFO
} from './actionTypes';

export function setTutorialInfo(): CR.Action {
  return { type: SET_TUTORIAL_INFO };
}

export function loadTutorials(): CR.Action {
  return { type: LOAD_TUTORIALS };
}

export function updateTutorial(name: string): CR.Action {
  return { type: UPDATE_TUTORIAL, payload: { name } };
}
