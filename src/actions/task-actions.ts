import * as Type from './actionTypes';
import * as Action from './actions';
import {store} from '../_base';

function checkPageComplete(taskPosition: number) {
  const taskLength: number = store.getState().taskTests.length;
  if (taskPosition > taskLength) {
    store.dispatch(Action.pageComplete());
  }
}

export function setTaskPosition(taskPosition: number): Action {
  const currentTaskPosition = store.getState().taskPosition;
  if (currentTaskPosition === taskPosition) {
    return { type: Type.NULL };
  }
  checkPageComplete(taskPosition);
  return { type: Type.SET_TASK_POSITION, payload: { taskPosition } };
}

export function showHint(): Action {
  return { type: Type.SHOW_HINT };
}

export function runTests(): Action {
  return { type: Type.RUN_TESTS };
}

export function testResult(result): Action {
  let actions = store.getState().editorActions;
  return { type: Type.TEST_RESULT, payload: { result, actions } };
}

export function testComplete(): Action {
  return { type: Type.TEST_COMPLETE };
}
