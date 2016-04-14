import * as Type from '../../actions/actionTypes';
import {loadRootPackageJson, searchForTutorials} from './check-tutorials';

export default function tutorialsReducer(tutorials = [], action: CR.Action): CR.Tutorial[] {
  switch (action.type) {
    case Type.LOAD_TUTORIALS:
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
