import {testsLoad} from './test';
import {
  ROUTE_SET, PAGE_SET, PAGE_POSITION_SET, PAGE_POSITION_LOAD
} from './_types';
import store from '../store';

export function pageNext(): Action {
  let pagePosition = store.getState().pagePosition;
  const {pages} = store.getState().tutorial;
  if (pagePosition >= pages.length - 1) {
    return { type: ROUTE_SET, payload: { route: 'final' } };
  } else {
    pagePosition = pagePosition + 1;
    // call TESTS_LOAD after PAGE_SET
    setTimeout(() => store.dispatch(testsLoad(pagePosition)));
    return { type: PAGE_SET, payload: { pagePosition } };
  }
}

export function pageSet(pagePosition = 0): Action {
  const {progress, tutorial} = store.getState();
  // beyond the final page
  if (pagePosition >= progress.pages.length) {
    return {
      payload: { route: 'final' },
      type: ROUTE_SET,
    };
  }
  return { type: PAGE_SET, payload: { pagePosition, tutorial } };
}

export function pagePositionLoad() {
  const {progress} = store.getState();
  return { type: PAGE_POSITION_LOAD, payload: { progress } };
}

export function pagePositionSet(pagePosition: CR.PagePosition): Action {
  return { type: PAGE_POSITION_SET, payload: { pagePosition } };
}
