import {fileExists} from '../exists';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from './tutorials';
import {createPackageJson, openDirectory, installTutorial} from './setup-actions';
import * as path from 'path';

export function hasDirectory(): Promise<CR.SetupWarning> {
  return new Promise((resolve, reject) => {
    const hasDirectory = !!window.coderoad.dir;
    if (!hasDirectory) {
      reject({
        key: 'noProject',
        title: 'Create an Atom Project',
        click: openDirectory,
        text: 'Start by opening a folder to work in.\nFile > Open',
        button: 'Open Folder',
        verify: null
      });
    } else {
      resolve();
    }
  });
}

export function hasPackageJson(): Promise<CR.SetupWarning> {
  return new Promise((resolve, reject) => {
    const hasPackageJson = packageJsonExists();
    if (!hasPackageJson) {
      reject({
        key: 'noPackageJson',
        title: 'Create a `package.json` file',
        click: createPackageJson,
        text: 'Open a terminal in this directory and run:\n`npm init` or `npm init --y`.\n',
        button: 'Create Package.json',
        verify: 'Package.json created'
      });
    }
    resolve();
  });
}

export function hasTutorialDep(): Promise<CR.SetupWarning> {
  return new Promise((resolve, reject) => {
    const packageJson = hasPackageJson ? loadRootPackageJson() : null;
    const hasTutorialDep = !!packageJson && _tutorialInstalled(packageJson.dependencies) ||
      _tutorialInstalled(packageJson.devDependencies);
    if (!hasTutorialDep) {
      reject({
        key: 'noTutorialDep',
        title: 'Install a Tutorial',
        click: installTutorial,
        button: 'Install functional-school',
        text: 'In terminal in this project directory run:\n`npm i --save coderoad-functional-school`',
        verify: 'Tutorial Installed'
      });
    }
    resolve();
  });
}

function _hasKeys(obj: Object): boolean {
  return Object.keys(obj).length > 0;
}

function _tutorialInstalled(location: Object): boolean {
  return !!location && _hasKeys(location) && searchForTutorials(location).length > 0;
}
