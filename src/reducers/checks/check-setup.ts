import {fileExists} from '../../services/exists';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from '../tutorials/check-tutorials';
import {createPackageJson, openDirectory, installTutorial} from './action-setup';
import * as path from 'path';

export function hasDirectory(): boolean {
    return !!window.coderoad.dir;
}

export function hasPackageJson(): boolean {
  return packageJsonExists();
}

export function hasTutorialDep(): boolean {
    const packageJson = hasPackageJson ? loadRootPackageJson() : null;
    return !!packageJson && _tutorialInstalled(packageJson.dependencies) ||
      _tutorialInstalled(packageJson.devDependencies);
}

function _hasKeys(obj: Object): boolean {
  return Object.keys(obj).length > 0;
}

function _tutorialInstalled(location: Object): boolean {
  return !!location && _hasKeys(location) &&
    searchForTutorials(location).length > 0;
}
