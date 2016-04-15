import {
  SHOW_HINT, RUN_TESTS, TEST_RESULT,
  TEST_COMPLETE, SET_HINT_POSITION
} from './actionTypes';
import {store} from '../store/store';

export function showHint(): CR.Action {
  return { type: SHOW_HINT };
}

export function runTests(): CR.Action {
  return { type: RUN_TESTS };
}

export function testResult(result: CR.TestResult): CR.Action {
  let actions = store.getState().editorActions;
  return { type: TEST_RESULT, payload: { result, actions } };
}

export function testComplete(): CR.Action {
  return { type: TEST_COMPLETE };
}

export function setHintPosition(hintPosition: number): CR.Action {
  return { type: SET_HINT_POSITION, payload: { hintPosition } };
}
