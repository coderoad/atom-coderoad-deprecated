import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from './_types';
import {pagePositionLoad} from './page';

export function progressLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {tutorial} = getState();
    dispatch({ type: PROGRESS_LOAD, payload: { tutorial } });
    // call pagePositionLoad after progress loads
    dispatch(pagePositionLoad());
  };
}

export function completePage(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {pagePosition, progress, tutorial} = getState();
    // all pages are true, tutorial complete
    if (progress.pages.every(x => x.completed)) {
      dispatch(completeTutorial());
    }
    dispatch({ type: COMPLETE_PAGE, payload: { pagePosition, tutorial } });
  };
}

export function completeTutorial(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {tutorial} = getState();
    dispatch({ type: COMPLETE_TUTORIAL, payload: { tutorial } });
  };
}
