import {tutorialUpdate} from './utils/update';
import {searchForTutorials} from './utils/check';
import {TUTORIALS_FIND} from './types';

export default function tutorials(
  tutorials = [], action: Action
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
      return tutorials;
  }
}
