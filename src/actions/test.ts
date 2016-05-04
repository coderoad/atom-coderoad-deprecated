import {
  TEST_RUN, TEST_RESULT, TEST_COMPLETE, TESTS_LOAD, TEST_SAVE
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

export function testSave(): Action {
  return { type: TEST_SAVE };
}

export function testsLoad(pagePosition: CR.PagePosition): Action {
  return { type: TESTS_LOAD, payload: { pagePosition } };
}
