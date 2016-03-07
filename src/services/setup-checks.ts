import {fileExists} from './exists';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from './tutorials';
import {createPackageJson, openDirectory, installTutorial} from './setup-actions';
import * as path from 'path';
import {store} from '../_base';
import * as Action from '../actions/actions';

export function verifySetupComplete() {
  hasDirectory()
  .then(hasPackageJson)
  .then(hasTutorialDep)
  .then(hasTestRunner)
  .then(() => {
    store.dispatch(Action.setupWarning(null));
    store.dispatch(Action.loadTutorials());
  })
  .catch((warning: CR.SetupWarning) => {
    store.dispatch(Action.setupWarning(warning));
  });
}

// 1
function hasDirectory(): Promise<CR.SetupWarning> {
  return new Promise((resolve, reject) => {
    const hasDirectory = !!window.coderoad.dir;
    if (!hasDirectory) {
      reject({
        key: 'noProject',
        title: 'Create an Atom Project',
        click: openDirectory,
        text: 'Start by opening a folder to work in.\nFile > Open',
        verify: null
      });
    } else {
      resolve();
    }
  });
}

// 2
function hasPackageJson(): Promise<CR.SetupWarning> {
  return new Promise((resolve, reject) => {
    const hasPackageJson = packageJsonExists();
    if (!hasPackageJson) {
      reject({
        key: 'noPackageJson',
        title: 'Create a `package.json` file',
        click: createPackageJson,
        text: 'Open a terminal in this directory and run:\n`npm init` or `npm init --y`.\n',
        verify: 'Package.json created'
      });
    }
    resolve();
  });
}

// 3
function hasTutorialDep(): Promise<CR.SetupWarning> {
  return new Promise((resolve, reject) => {
    const packageJson = hasPackageJson ? loadRootPackageJson() : null;
    const hasTutorialDep = !!packageJson && _tutorialInstalled(packageJson.dependencies) ||
      _tutorialInstalled(packageJson.devDependencies);
    if (!hasTutorialDep) {
      reject({
        key: 'noTutorialDep',
        title: 'Install a Tutorial',
        click: installTutorial,
        text: 'In terminal in this project directory run:\n`npm i --save coderoad-functional-school`',
        verify: 'Tutorial Installed'
      });
    }
    resolve();
  });
}

// 4
function hasTestRunner(): Promise<CR.SetupWarning> {
  return new Promise((resolve, reject) => {
    const hasTestRunner = true;
    if (!hasTestRunner) {
      reject({
        key: 'noTestRunner',
        title: 'Error with Tutorial',
        click: null,
        text: 'no test runner found'
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
