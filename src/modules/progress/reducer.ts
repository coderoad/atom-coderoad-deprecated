import {PROGRESS_LOAD, PROGRESS_COMPLETE_PAGE, PROGRESS_COMPLETE_TUTORIAL} from './types';
import {loadProgressFromLocalStorage, saveToLocalStorage} from './utils/local-storage';

const _progress: CR.Progress = {
  completed: false,
  pages: []
};

export default function progress(
  progress = _progress, action: Action
): CR.Progress {
  switch (action.type) {

    case PROGRESS_LOAD:
      const {tutorial} = action.payload;
      // load saved progress
      const saved = loadProgressFromLocalStorage(tutorial);
      if (saved) { return saved; }
      // set progress defaults
      return {
        completed: false,
        pages: tutorial.pages.map(() => false)
      };

    case PROGRESS_COMPLETE_PAGE:
      const {tutorial, pagePosition, completed} = action.payload;
      progress.pages[pagePosition] = completed;
      saveToLocalStorage(tutorial, progress);
      return progress;

    case PROGRESS_COMPLETE_TUTORIAL:
      const {tutorial, completed} = action.payload.tutorial;
      progress.completed = completed;
      saveToLocalStorage(tutorial, progress);
      return progress;

    default:
      return progress;
  }
}
