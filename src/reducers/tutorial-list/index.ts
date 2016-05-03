import {TUTORIALS_FIND} from '../../actions/_types';
import {tutorialUpdate} from './update';
import store from '../../store';
import {searchForTutorials} from './check';

export default function tutorialListReducer(
  tutorialList = [], action: Action
): Tutorial.Info[] {
  switch (action.type) {
    // case TUTORIAL_UPDATE:
    //   tutorialUpdate(action.payload.name);
    /* falls through */
    case TUTORIALS_FIND:
      const packageJson = store.getState().packageJson;
      return ([]
        .concat(searchForTutorials(packageJson.dependencies))
        .concat(searchForTutorials(packageJson.devDependencies)));

    default:
      return tutorialList;
  }
}
