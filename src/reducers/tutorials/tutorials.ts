import * as Type from '../../actions/actionTypes';
import {loadRootPackageJson, searchForTutorials} from './check-tutorials';

export default function tutorialsReducer(tutorials = [], action: CR.Action): CR.Tutorial[] {
  switch (action.type) {
    case Type.LOAD_TUTORIALS:
        let tut = [];
        let packageJson: PackageJson = loadRootPackageJson();
        if (window.coderoad.dir && !!packageJson) {
          tut.concat(searchForTutorials(packageJson.dependencies))
            .concat(searchForTutorials(packageJson.devDependencies));
        }
        return tut;
    default:
      return tutorials;
  }
}
