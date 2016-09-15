import {alertOpen, testRun} from '../../actions';
import {
  PROGRESS_COMPLETE_PAGE, PROGRESS_COMPLETE_TUTORIAL, PROGRESS_LOAD,
  PROGRESS_PAGE_POSITION, PROGRESS_RESET
} from './types';

export function progressLoad(): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState) => {
    const {tutorial} = getState();
    dispatch({ type: PROGRESS_LOAD, payload: { tutorial } });
    dispatch(_progressPagePosition());
    // dispatch(testRun());
  };
}

function _progressPagePosition(): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState) => {
    const {progress} = getState();
    dispatch({ type: PROGRESS_PAGE_POSITION, payload: { progress } });
  };
}

export function progressCompletePage(completed = true):
  Redux.ThunkAction<any, any, any> {
  return (dispatch, getState) => {
    const {pagePosition, progress, tutorial} = getState();
    // all pages are true, tutorial complete
    dispatch({ type: PROGRESS_COMPLETE_PAGE, payload: { pagePosition, tutorial, completed } });
    if (progress.completed || progress.pages.every(x => x.completed)) {
      dispatch(progressCompleteTutorial());
    } else {
      dispatch(alertOpen({
        message: `Page ${pagePosition + 1} Complete`,
        action: 'PASS',
      }));
    }
  };
}

export function progressCompleteTutorial(completed = true):
  Redux.ThunkAction<any, any, any> {
  return (dispatch, getState) => {
    const {tutorial} = getState();
    dispatch({ type: PROGRESS_COMPLETE_TUTORIAL, payload: { tutorial, completed } });
    dispatch(alertOpen({
      message: 'Tutorial Complete',
      action: 'PASS',
    }));
  };
}

export function progressReset() {
  return (dispatch, getState) => {
    const { tutorial } = getState();
    dispatch({ type: PROGRESS_RESET, payload: { tutorial } });
  };
}