import {store} from '../_base';
import * as Action from './actions';
import * as path from 'path';
import * as fs from 'fs';
import * as Type from './actionTypes';
import {fileExists} from '../services/exists';

export function loadTutorials(): CR.Action {
  let tutorials = [];
  if (window.coderoad.dir) {
    let packageJson: PackageJson|boolean = loadRootPackageJson();
    if (!packageJson) {
      window.coderoad.package = null;
      let message = 'No package.json file available. Try running "npm init --y" in terminal';
      console.log(message);
      store.dispatch(Action.toggleAlert({ message, action: 'tip', duration: 6000 }));
    } else {
      tutorials = []
        .concat(searchForTutorials(packageJson.dependencies))
        .concat(searchForTutorials(packageJson.devDependencies));
    }
  }
  return { type: Type.LOAD_TUTORIALS, payload: { tutorials } };
}


function loadRootPackageJson(): PackageJson|boolean {
  let pathToPackageJson = path.join(window.coderoad.dir, 'package.json');
  if (fileExists(pathToPackageJson)) {
    return JSON.parse(fs.readFileSync(pathToPackageJson, 'utf8'));
  }
  return false;
}

function isTutorial(name): boolean {
  let pathToTutorialPackageJson = path.join(window.coderoad.dir, 'node_modules', name, 'package.json');
  if (fileExists(pathToTutorialPackageJson)) {
    // has package.json
    let packageJson = JSON.parse(fs.readFileSync(pathToTutorialPackageJson, 'utf8'));
    // main path to coderoad.json
    if (packageJson.main && packageJson.main.match(/coderoad.json$/)) {
      let pathToCoderoadJson = path.join(window.coderoad.dir, 'node_modules', name, packageJson.main);
      // coderoad.json file exists
      if (fileExists(pathToCoderoadJson)) {
        return true;
      }
    }
  }
  return false;
}

function searchForTutorials(location): string[] {
  if (!!location && Object.keys(location).length > 0) {
    return Object.keys(location).filter((name) => isTutorial(name));
  } else {
    return [];
  }
}
