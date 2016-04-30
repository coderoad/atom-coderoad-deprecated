import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL
} from '../../actions/_types';
import {loadProgressFromLocalStorage, saveToLocalStorage} from './local-storage';
import store from '../../store';

const _progress: CR.Progress = {
  completed: false,
  chapters: []
};

export default function progressReducer(
  progress = _progress, action: Action
): CR.Progress {
  switch (action.type) {
    case PROGRESS_LOAD:
      const tutorial = store.getState().tutorial;
      // load saved progress
      const saved = loadProgressFromLocalStorage();
      if (saved) { return saved; }
      // set progress defaults
      return {
        completed: false,
        chapters: !tutorial.chapters
          ? []
          : tutorial.chapters.map((chapter) => {
            return {
              completed: false,
              pages: chapter.pages.map(() => false)
            };
          })
      };
    case COMPLETE_PAGE:
      const {chapter, page} = action.payload.position;
      progress.chapters[chapter].pages[page] = true;
      saveToLocalStorage(progress);
      return progress;
    case COMPLETE_CHAPTER:
      progress.chapters[action.payload.chapter].completed = true;
      saveToLocalStorage(progress);
      return progress;
    case COMPLETE_TUTORIAL:
      progress.completed = true;
      saveToLocalStorage(progress);
      return progress;
    default:
      return progress;
  }
}
