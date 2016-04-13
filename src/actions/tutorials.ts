import * as Type from './actionTypes';

export function loadTutorials(): CR.Action {
  return { type: Type.LOAD_TUTORIALS };
}
