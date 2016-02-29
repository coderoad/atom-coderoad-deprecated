import * as Type from './actionTypes';
import {store} from '../_base';

export function pageComplete(): CR.Action {
  const position: CR.Position = store.getState().position;
  const pageLength: number = store.getState().progress.chapters[position.chapter].pages.length;
  if (position.page >= pageLength - 1) {
    return chapterComplete();
  }
  return { type: Type.PAGE_COMPLETE, payload: { position } };
}

export function chapterComplete(): CR.Action {
  const chapter: number = store.getState().position.chapter;
  const chapterLength: number = store.getState().progress.chapters.length;
  if (chapter >= chapterLength - 1) {
    return projectComplete();
  }
  return { type: Type.CHAPTER_COMPLETE, payload: { chapter } };
}

export function projectComplete(): CR.Action {
  return { type: Type.PROJECT_COMPLETE };
}
