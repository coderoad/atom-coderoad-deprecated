import {ROUTE_SET, PAGE_SET} from './_types';
import {store} from '../store';

const _position = {
  chapter: 0,
  page: 0,
};

export function pageNext(): Action {
  let position = null;
  const {page, chapter} = store.getState().position;
  const {chapters} = store.getState().tutorial;
  if (page < chapters[chapter].pages.length - 1) {
    position = {
      chapter,
      page: page + 1,
    };
  } else if (chapter < chapters.length - 1) {
    position = {
      chapter: chapter + 1,
      page: 0,
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
