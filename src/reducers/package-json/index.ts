import {PACKAGE_SET} from '../../actions/_types';
import {join} from 'path';
import {readFileSync} from 'fs';
import {fileExists} from '../../services/exists';
import store from '../../store';

export default function packageJsonReducer(
  pj = null, action: Action
): PackageJson {
  switch (action.type) {

    case PACKAGE_SET:
      const dir = store.getState().dir;
      const pathToPackageJson = join(dir, 'package.json');
      if (fileExists(pathToPackageJson)) {
        return JSON.parse(readFileSync(pathToPackageJson, 'utf8'));
      }
      return null;

    default:
      return pj;
  }
}
