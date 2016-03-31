import {store} from '../_base';
import * as path from 'path';
import * as fs from 'fs';
import {fileExists} from '../services/exists';

let tutorialError = 'This is an error with the tutorial itself';

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
  // has package.json
  let pathToTutorialPackageJson = path.join(window.coderoad.dir, 'node_modules', name, 'package.json');
  if (!fileExists(pathToTutorialPackageJson)) {
    console.log(`Error with ${name}: no package.json file found. ${tutorialError}`);
    return false;
  }
  // main path to coderoad.json
  let packageJson = JSON.parse(fs.readFileSync(pathToTutorialPackageJson, 'utf8'));
  if (!packageJson.main && packageJson.main.match(/coderoad.json$/)) {
    console.log(`Error with ${name}: main does not load a coderoad.json file. ${tutorialError}`);
    return false;
  }
  // coderoad.json file exists
  let pathToCoderoadJson = path.join(window.coderoad.dir, 'node_modules', name, packageJson.main);
  if (!fileExists(pathToCoderoadJson)) {
    console.log(`Error with ${name}: no coderoad.json file. ${tutorialError}`);
    return false;
  };
  if (!packageJson.config || !packageJson.config.testRunner) {
    console.log(`Error with ${name}: no test runner specified. ${tutorialError}`);
    return false;
  }
  let pathToTestRunner = path.join(window.coderoad.dir, 'node_modules', packageJson.config.testRunner);
  // if (!fileExists(pathToTestRunner)) {
  //   console.log(`Error with ${name}: ${packageJson.config.testRunner} test runner not installed`);
  //   return false;
  // }
  return true;
}

export function searchForTutorials(deps: Object): string[] {
  if (!!deps && Object.keys(deps).length > 0) {
    return Object.keys(deps).filter((name) => _isTutorial(name));
  } else {
    return [];
  }
}
