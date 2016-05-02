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
    store.dispatch(testsLoad(pagePosition));
    return {
      payload: { pagePosition },
      type: PAGE_SET,
    };
  }
}

export function pageSet(pagePosition = 0): Action {
  if (store.getState().progress.pages[pagePosition]) {
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
