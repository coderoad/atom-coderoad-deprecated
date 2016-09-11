import {hintPositionSet, routeSet, testLoad} from '../../actions';
import {PAGE_SET} from './types';

/**
 * calls PAGE_SET with next page
 * @param  {} any
 * @returns thunk
 */
export function pageNext(): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState): void => {
    let {pagePosition} = getState();
    dispatch(pageSet(pagePosition + 1));
  };
}

/**
 * PAGE_SET action creator
 * 
 * opens new page, sets hintPosition to 0, resets tasks
 * loads tests
 * 
 * if final page, routes to final
 * 
 * @param  {} pagePosition=0
 * @returns thunk
 */
export function pageSet(pagePosition = 0): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState): void => {
    const state = getState();
    const {progress, tutorial, route} = state;
    // routes
    if (pagePosition >= progress.pages.length) {
      return dispatch(routeSet('final'));
    }
    dispatch(hintPositionSet(0));

    // sets tasks to new pagePosition
    const tasks = tutorial.pages[pagePosition].tasks || [];

    dispatch({
      type: PAGE_SET, payload: { pagePosition, tutorial, progress, tasks }
    });
    dispatch(testLoad());
  };
}
