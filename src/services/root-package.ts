import {readFileSync} from 'fs';
import {fileExists} from './exists';
import {join} from 'path';

class RootPackageService {
  getRootPackage(): PackageJson {
    const pathToPackageJson = join(window.coderoad.dir, 'package.json');
    if (fileExists(pathToPackageJson)) {
      return JSON.parse(readFileSync(pathToPackageJson, 'utf8'));
    }
    return null;
  }
}
