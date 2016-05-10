import {
  TEST_RUN, TEST_RESULT, TEST_COMPLETE, TEST_SAVE
} from './_types';
import {hintPositionSet} from './hint';
import {completePage} from './progress';

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
    const {taskActions, progress, pagePosition} = getState();
    const filter: string = getTestFilter(result);
    if (filter === 'PASS' || filter === 'FAIL') {
      dispatch(hintPositionSet(0));
    }
    if (filter === 'FAIL' && progress.pages[pagePosition]) {
      dispatch(completePage(false));
    }
    dispatch({ type: TEST_RESULT, payload: { result, taskActions }, filter });
  };
}

function getTestFilter(result: Test.Result): string {
  switch (true) {
    case result.pass && result.change > 0:
      return 'PASS';
    case result.pass === false && result.change < 1:
      return 'FAIL';
    default:
      return 'NOTE';
  }
}

export function testComplete(): Action {
  return { type: TEST_COMPLETE };
}

export function testSave(): Action {
  return { type: TEST_SAVE };
}
