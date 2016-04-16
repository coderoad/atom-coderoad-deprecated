import {UPDATE_TUTORIAL, LOAD_TUTORIALS} from '../../actions/actionTypes';
import {updateTutorial} from './update-tutorial';
import RootPackage from '../../services/root-package';

export default function tutorialsReducer(tutorials = [],
  action: CR.Action): CR.Tutorial[] {
  switch (action.type) {
    case UPDATE_TUTORIAL:
      updateTutorial(action.payload.name);
      /* falls through */
    case LOAD_TUTORIALS:
      return RootPackage.getTutorials();
    default:
      return tutorials;
  }
}
