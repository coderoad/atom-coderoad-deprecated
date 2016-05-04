import {
  TEST_RUN, TEST_RESULT, TEST_COMPLETE, TESTS_LOAD
} from './_types';
import store from '../store';

export function testRun(): Action {
  return { type: TEST_RUN };
}

export function testResult(result: Test.Result): Action {
  let actions = store.getState().taskActions;
  return {
    payload: { result, actions },
    type: TEST_RESULT,
  };
}

export function testComplete(): Action {
  return { type: TEST_COMPLETE };
}

export function testsLoad(pagePosition: CR.PagePosition): Action {
  return { type: TESTS_LOAD, payload: { pagePosition } };
}
