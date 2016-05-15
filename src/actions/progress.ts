import {
  PROGRESS_PAGE_POSITION_LOAD, PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from './_types';
import {alertOpen} from '../modules/alert/actions';
import {testRun} from './test';

export function progressPagePositionLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {progress} = getState();
    dispatch({ type: PROGRESS_PAGE_POSITION_LOAD, payload: { progress } });
  };
}

export function progressLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {tutorial} = getState();
    dispatch({ type: PROGRESS_LOAD, payload: { tutorial } });
    // call pagePositionLoad after progress loads
    dispatch(progressPagePositionLoad());
    dispatch(testRun());
  };
}

export function completePage(completed = true): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {pagePosition, progress, tutorial} = getState();
    // all pages are true, tutorial complete
    dispatch({ type: COMPLETE_PAGE, payload: { pagePosition, tutorial, completed } });
    if (completed) {
      if (progress.pages.every(x => x.completed)) {
        dispatch(completeTutorial());
      } else {
        dispatch(alertOpen({
          message: `Page ${pagePosition + 1} Complete`,
          action: 'PASS',
        }));
      }
    } else if (progress.completed) {
      dispatch(completeTutorial(false));
    }
  };
}

export function completeTutorial(completed = true): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {tutorial} = getState();
    dispatch({ type: COMPLETE_TUTORIAL, payload: { tutorial, completed } });
    dispatch(alertOpen({
      message: 'Tutorial Complete',
      action: 'PASS',
    }));
  };
}
