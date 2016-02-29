import * as Type from './actionTypes';
import * as Action from './actions';
import {store} from '../_base';

// function checkPageComplete(taskPosition: number): void {
//   console.log(store.getState().taskTests);
//   const taskLength: number = store.getState().taskTests.length;
//   console.log('check', taskPosition, taskLength);
//   if (taskPosition > taskLength) {
//     store.dispatch(Action.pageComplete());
//   }
// }

// export function setTaskPosition(taskPosition: number): CR.Action {
//   const currentTaskPosition: number = store.getState().taskPosition;
//   if (currentTaskPosition === taskPosition) {
//     return { type: Type.NULL };
//   }
//   checkPageComplete(taskPosition);
//   return { type: Type.SET_TASK_POSITION, payload: { taskPosition } };
// }

export function showHint(): CR.Action {
  return { type: Type.SHOW_HINT };
}

export function runTests(): CR.Action {
  return { type: Type.RUN_TESTS };
}

export function testResult(result): CR.Action {
  let actions = store.getState().editorActions;
  return { type: Type.TEST_RESULT, payload: { result, actions } };
}

export function testComplete(): CR.Action {
  return { type: Type.TEST_COMPLETE };
}
