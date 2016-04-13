import {fileExists} from '../../services/exists';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from '../tutorials/tutorials';
import {createPackageJson, openDirectory, installTutorial} from './setup-actions';
import * as path from 'path';

export function hasDirectory(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const hasDirectory = !!window.coderoad.dir;
    if (!hasDirectory) {
      resolve(true);
    } else {
      resolve(true);
    }
  });
}

export function hasPackageJson(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const hasPackageJson = packageJsonExists();
    if (!hasPackageJson) {
      resolve(true);
    }
    resolve(true);
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
    resolve(true);
  });
}

function _hasKeys(obj: Object): boolean {
  return Object.keys(obj).length > 0;
}

function _tutorialInstalled(location: Object): boolean {
  return !!location && _hasKeys(location) &&
    searchForTutorials(location).length > 0;
}
