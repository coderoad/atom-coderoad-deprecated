import {
  TEST_RUN, TEST_RESULT, TEST_COMPLETE
} from './_types';
import {store} from '../store/store';

export function testRun(): CR.Action {
  return { type: TEST_RUN };
}

export function testResult(result: CR.TestResult): CR.Action {
  let actions = store.getState().editorActions;
  return { type: TEST_RESULT, payload: { result, actions } };
}

export function testComplete(): CR.Action {
  return { type: TEST_COMPLETE };
}
