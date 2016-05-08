import {
  TEST_RUN, TEST_RESULT, TEST_COMPLETE, TESTS_LOAD, TEST_SAVE
} from './_types';
import store from '../store';

export function testRun(): Action {
  const {taskTests, dir, tutorial, taskPosition} = store.getState();
  return { type: TEST_RUN, payload: { taskTests, dir, tutorial, taskPosition} };
}

export function testResult(result: Test.Result): Action {
  let {taskActions} = store.getState();
  return { type: TEST_RESULT, payload: { result, taskActions } };
}

export function testComplete(): Action {
  return { type: TEST_COMPLETE };
}

export function testSave(): Action {
  return { type: TEST_SAVE };
}

export function testsLoad(pagePosition: CR.PagePosition): Action {
  const {tasks, progress, tutorial, dir} = store.getState();
  return { type: TESTS_LOAD, payload: {
    pagePosition, tasks, progress, tutorial, dir
  } };
}
