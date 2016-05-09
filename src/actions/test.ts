import {
  TEST_RUN, TEST_RESULT, TEST_COMPLETE, TESTS_LOAD, TEST_SAVE
} from './_types';

export function testRun(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {taskTests, dir, tutorial, taskPosition} = getState();
    dispatch({
      type: TEST_RUN, payload: { taskTests, dir, tutorial, taskPosition }
    });
  };
}

export function testResult(result: Test.Result): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {taskActions} = getState();
    dispatch({ type: TEST_RESULT, payload: { result, taskActions } });
  };
}

export function testComplete(): Action {
  return { type: TEST_COMPLETE };
}

export function testSave(): Action {
  return { type: TEST_SAVE };
}

export function testsLoad(
  pagePosition: CR.PagePosition
): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {tasks, progress, tutorial, dir} = getState();
    dispatch({
      type: TESTS_LOAD, payload: {
        pagePosition, tasks, progress, tutorial, dir
      }
    });
  };
}
