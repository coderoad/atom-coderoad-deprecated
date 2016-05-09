import {testsLoad} from './test';
import {
  ROUTE_SET, PAGE_SET, PAGE_POSITION_SET, PAGE_POSITION_LOAD
} from './_types';

export function pageNext(): ReduxThunk.ThunkInterface | Action {
  return (dispatch, getState): void => {
    let {pagePosition, tutorial} = getState();
    const pages = tutorial.pages;
    if (pagePosition >= pages.length - 1) {
      dispatch({ type: ROUTE_SET, payload: { route: 'final' } });
    } else {
      pagePosition += 1;
      // call TESTS_LOAD after PAGE_SET
      dispatch(pageSet(pagePosition));
      dispatch(testsLoad(pagePosition));
    }
  };
}

export function pageSet(pagePosition = 0): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir, progress, tutorial} = getState();
    if (pagePosition >= progress.pages.length) {
      dispatch({ type: ROUTE_SET, payload: { route: 'final' } });
    }
    dispatch({
      type: PAGE_SET, payload: { dir, pagePosition, tutorial, progress }
    });
  };
}

export function pagePositionLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {progress} = getState();
    dispatch({ type: PAGE_POSITION_LOAD, payload: { progress } });
  };
}

export function pagePositionSet(pagePosition: CR.PagePosition): Action {
  return { type: PAGE_POSITION_SET, payload: { pagePosition } };
}
