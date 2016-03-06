import {store} from '../_base';
import * as path from 'path';
import * as fs from 'fs';
import {fileExists} from '../services/exists';

export function packageJsonExists(): boolean {
  const pathToPackageJson = path.join(window.coderoad.dir, 'package.json');
  return fileExists(pathToPackageJson);
}

export function loadRootPackageJson(): PackageJson {
  const pathToPackageJson = path.join(window.coderoad.dir, 'package.json');
  if (fileExists(pathToPackageJson)) {
    return JSON.parse(fs.readFileSync(pathToPackageJson, 'utf8'));
  }
  return null;
}

function _isTutorial(name: string): boolean {
  let pathToTutorialPackageJson = path.join(window.coderoad.dir, 'node_modules', name, 'package.json');
  if (fileExists(pathToTutorialPackageJson)) {
    // has package.json
    let packageJson = JSON.parse(fs.readFileSync(pathToTutorialPackageJson, 'utf8'));
    // main path to coderoad.json
    if (packageJson.main && packageJson.main.match(/coderoad.json$/)) {
      let pathToCoderoadJson = path.join(window.coderoad.dir, 'node_modules', name, packageJson.main);
      // coderoad.json file exists
      return fileExists(pathToCoderoadJson);
    }
  }
  return false;
}

export function searchForTutorials(deps: Object): string[] {
  if (!!deps && Object.keys(deps).length > 0) {
    return Object.keys(deps).filter((name) => _isTutorial(name));
  } else {
    return [];
  }
}
