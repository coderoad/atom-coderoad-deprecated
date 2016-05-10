import {join} from 'path';
import {readFileSync} from 'fs';
import {fileExists} from '../../services/exists';
import {SETUP_PACKAGE} from '../../actions/_types';

export default function packageJsonReducer(
  pj = null, action: Action
): PackageJson {
  switch (action.type) {

    case SETUP_PACKAGE:
      const {dir} = action.payload;
      const pathToPackageJson = join(dir, 'package.json');
      if (fileExists(pathToPackageJson)) {
        return JSON.parse(readFileSync(pathToPackageJson, 'utf8'));
      }
      return null;

    default:
      return pj;
  }
}
