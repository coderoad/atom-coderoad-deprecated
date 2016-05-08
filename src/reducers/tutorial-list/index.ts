import {TUTORIALS_FIND} from '../../actions/_types';
import {tutorialUpdate} from './update';
import {searchForTutorials} from './check';

export default function tutorialListReducer(
  tutorialList = [], action: Action
): Tutorial.Info[] {
  switch (action.type) {
    // case TUTORIAL_UPDATE:
    //   tutorialUpdate(action.payload.name);
    /* falls through */
    case TUTORIALS_FIND:
      const {packageJson, dir} = action.payload;
      return ([]
        .concat(searchForTutorials(dir, packageJson.dependencies))
        .concat(searchForTutorials(dir, packageJson.devDependencies)));

    default:
      return tutorialList;
  }
}
