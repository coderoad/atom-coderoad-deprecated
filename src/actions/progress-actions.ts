import {
  PAGE_COMPLETE, CHAPTER_COMPLETE, PROJECT_COMPLETE
} from './actionTypes';
import {store} from '../store/store';

export function pageComplete(): CR.Action {
  const position: CR.Position = store.getState().position;
  const pageLength: number = store.getState().progress.chapters[position.chapter].pages.length;
  if (position.page >= pageLength - 1) {
    return chapterComplete();
  }
  return { type: PAGE_COMPLETE, payload: { position } };
}

export function chapterComplete(): CR.Action {
  const chapter: number = store.getState().position.chapter;
  const chapterLength: number = store.getState().progress.chapters.length;
  if (chapter >= chapterLength - 1) {
    return projectComplete();
  }
  return { type: CHAPTER_COMPLETE, payload: { chapter } };
}

export function projectComplete(): CR.Action {
  return { type: PROJECT_COMPLETE };
}
