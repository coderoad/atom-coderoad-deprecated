import {testsLoad} from './test';
import {ROUTE_SET, PAGE_SET} from './_types';
import store from '../store';

const _position = {
  page: 0,
};

export function pageNext(): Action {
  let position = null;
  const {page} = store.getState().position;
  const {pages} = store.getState().tutorial;
  if (page < pages.length - 1) {
    store.dispatch(testsLoad());
    position = {
      page: page + 1,
    };
  } else {
    return {
      payload: { route: 'final' },
      type: ROUTE_SET,
    };
  }
  return {
    payload: { position },
    type: PAGE_SET,
  };
}

export function pageSet(
  position: CR.Position = _position
  ): Action {
  if (position.completed) {
    return {
      payload: { route: 'final' },
      type: ROUTE_SET,
    };
  }
  return {
    payload: { position },
    type: PAGE_SET,
  };
}
