import {
  TUTORIAL_SET, COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL
} from '../../actions/_types';
import TutorialPackage from '../../services/tutorial-package';

const defaultProgress: CR.Progress = {
  completed: false,
  chapters: [{
    title: '',
    description: '',
    completed: false,
    pages: [{
      title: '',
      description: '',
      completed: false
    }]
  }]
};

export default function progressReducer(progress = defaultProgress,
  action: CR.Action): CR.Progress {
  switch (action.type) {
    case TUTORIAL_SET:
      return TutorialPackage.getProgress();
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
