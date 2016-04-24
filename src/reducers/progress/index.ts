import {persistentReducer} from 'redux-pouchdb';
import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL
} from '../../actions/_types';
// import TutorialPackage from '../../services/tutorial-package';
import {store} from '../../store';

const _progress: CR.Progress = {
  completed: false,
  chapters: [{
    title: '',
    description: '',
    completed: false,
    pages: [{
      title: '',
      description: '',
      completed: false,
    }]
  }]
};

function progressReducer(
  progress = _progress, action: Action
): CR.Progress {
  switch (action.type) {
    case PROGRESS_LOAD:
      const chapters = store.getState().tutorial.chapters;
      return {
        completed: false,
        chapters: !chapters ? [] : chapters.map(({title, description, completed, pages}) => {
          return {
            title, description, completed: completed || false,
            pages: !pages ? [] : pages.map((page: CR.Page) => {
              return {
                title: page.title,
                description: page.description,
                completed: page.completed || false,
              };
            })
          };
        })
      };
    case COMPLETE_PAGE:
      const position = action.payload.position;
      progress.chapters[position.chapter].pages[position.page].completed = true;
      return progress;
    case COMPLETE_CHAPTER:
      progress.chapters[action.payload.chapter].completed = true;
      return progress;
    case COMPLETE_TUTORIAL:
      progress.completed = true;
      return progress;
    default:
      return progress;
  }
}
export default persistentReducer(progressReducer);
