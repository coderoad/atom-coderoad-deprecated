import {UPDATE_TUTORIAL, LOAD_TUTORIALS} from '../../actions/actionTypes';
import {loadRootPackageJson, searchForTutorials} from './check-tutorials';
import {updateTutorial} from './update-tutorial';

export default function tutorialsReducer(tutorials = [],
  action: CR.Action): CR.Tutorial[] {
  switch (action.type) {
    case UPDATE_TUTORIAL:
      updateTutorial(action.payload.name);
      /* falls through */
    case LOAD_TUTORIALS:
      let packageJson: PackageJson = loadRootPackageJson();
      if (!!packageJson) {
        return [].concat(searchForTutorials(packageJson.dependencies))
          .concat(searchForTutorials(packageJson.devDependencies));
      }
      return [];
    default:
      return tutorials;
  }
}
