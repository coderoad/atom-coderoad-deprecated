import * as Type from './actionTypes';
import {store} from '../_base';

export function pageComplete() {
  const position = store.getState().position;
  const pageLength = store.getState().progress.chapters[position.chapter].pages.length;
  const action = { type: Type.PAGE_COMPLETE, payload: { position } };
  if (position.page >= pageLength - 1) {
    store.dispatch(chapterComplete());
    return action;
  }
  return action;
}

export function chapterComplete(): Action {
  const chapter = store.getState().position.chapter;
  const chapterLength = store.getState().progress.chapters.length;
  const action = { type: Type.CHAPTER_COMPLETE, payload: { chapter } };
  if (chapter >= chapterLength - 1) {
    store.dispatch(projectComplete());
    return action;
  }
  return action;
}

export function projectComplete(): Action {
  return { type: Type.PROJECT_COMPLETE };
}
