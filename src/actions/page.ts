import {testsLoad} from './test';
import {
  ROUTE_SET, PAGE_SET, PAGE_POSITION_SET, PAGE_POSITION_LOAD
} from './_types';
import store from '../store';

export function pageNext(): Action {
  let pagePosition = store.getState().pagePosition;
  const {pages} = store.getState().tutorial;
  if (pagePosition >= pages.length - 1) {
    return {
      payload: { route: 'final' },
      type: ROUTE_SET,
    };
  } else {
    pagePosition = pagePosition + 1;
    setTimeout(() => store.dispatch(testsLoad(pagePosition)));
    return {
      payload: { pagePosition },
      type: PAGE_SET,
    };
  }
}

export function pageSet(pagePosition = 0): Action {
  // beyond the final page
  if (pagePosition >= store.getState().progress.pages.length) {
    return {
      payload: { route: 'final' },
      type: ROUTE_SET,
    };
  }
  return {
    payload: { pagePosition },
    type: PAGE_SET,
  };
}

export function pagePositionLoad() {
  return { type: PAGE_POSITION_LOAD };
}

export function pagePositionSet(pagePosition: CR.PagePosition): Action {
  return {
    payload: { pagePosition },
    type: PAGE_POSITION_SET,
  };
}
