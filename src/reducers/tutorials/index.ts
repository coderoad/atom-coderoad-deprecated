import {TUTORIAL_UPDATE, TUTORIALS_FIND} from '../../actions/_types';
import {tutorialUpdate} from './update-tutorial';
import {store} from '../../store';
import {searchForTutorials} from './check-tutorials';

export default function tutorialsReducer(tutorials = [],
  action: CR.Action): CR.Tutorial[] {
  switch (action.type) {
    case TUTORIAL_UPDATE:
      tutorialUpdate(action.payload.name);
      /* falls through */
    case TUTORIALS_FIND:
          const packageJson = store.getState().packageJson;
          return ([]
            .concat(searchForTutorials(packageJson.dependencies))
            .concat(searchForTutorials(packageJson.devDependencies)));
    default:
      return tutorials;
  }
}
