import {readFileSync} from 'fs';
import {fileExists} from './exists';
import {join} from 'path';

class RootPackageService {
  packageJson: PackageJson;
  tutorials: CR.Tutorial[];
  constructor() {
    this.packageJson = null;
  }
  set(): void {
    const pathToPackageJson = join(window.coderoad.dir, 'package.json');
    if (fileExists(pathToPackageJson)) {
      this.packageJson = JSON.parse(readFileSync(pathToPackageJson, 'utf8'));
    } else {
      return null;
    }
  }
  get(): PackageJson {
    return this.packageJson;
  }
}
export default new RootPackageService();
