import {fileExists} from '../../services/exists';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from '../tutorials/check-tutorials';
import {createPackageJson, openDirectory, installTutorial} from './action-setup';
import * as path from 'path';

export function hasDirectory(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const hasDirectory = !!window.coderoad.dir;
    if (!hasDirectory) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}

export function hasPackageJson(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const hasPackageJson = packageJsonExists();
    if (!hasPackageJson) {
      resolve(true);
    }
    resolve(false);
  });
}

export function hasTutorialDep(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const packageJson = hasPackageJson ? loadRootPackageJson() : null;
    const hasTutorialDep = !!packageJson && _tutorialInstalled(packageJson.dependencies) ||
      _tutorialInstalled(packageJson.devDependencies);
    if (!hasTutorialDep) {
      resolve(true);
    }
    resolve(false);
  });
}

function _hasKeys(obj: Object): boolean {
  return Object.keys(obj).length > 0;
}

function _tutorialInstalled(location: Object): boolean {
  return !!location && _hasKeys(location) &&
    searchForTutorials(location).length > 0;
}
