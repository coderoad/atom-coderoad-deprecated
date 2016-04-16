import {TUTORIAL_UPDATE, TUTORIALS_FIND} from '../../actions/_types';
import {tutorialUpdate} from './update-tutorial';
import RootPackage from '../../services/root-package';

export default function tutorialsReducer(tutorials = [],
  action: CR.Action): CR.Tutorial[] {
  switch (action.type) {
    case TUTORIAL_UPDATE:
      tutorialUpdate(action.payload.name);
      /* falls through */
    case TUTORIALS_FIND:
      return RootPackage.getTutorials();
    default:
      return tutorials;
  }
}
