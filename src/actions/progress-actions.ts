import * as Type from './actionTypes';
import {store} from '../_base';

export function pageComplete(): CR.Action {
  const position: CR.Position = store.getState().position;
  const pageLength: number = store.getState().progress.chapters[position.chapter].pages.length;
  const action: CR.Action = { type: Type.PAGE_COMPLETE, payload: { position } };
  if (position.page >= pageLength - 1) {
    store.dispatch(chapterComplete());
    return action;
  }
  return action;
}

export function chapterComplete(): CR.Action {
  const chapter: number = store.getState().position.chapter;
  const chapterLength: number = store.getState().progress.chapters.length;
  const action: CR.Action = { type: Type.CHAPTER_COMPLETE, payload: { chapter } };
  if (chapter >= chapterLength - 1) {
    store.dispatch(projectComplete());
    return action;
  }
  return action;
}

export function projectComplete(): CR.Action {
  return { type: Type.PROJECT_COMPLETE };
}
