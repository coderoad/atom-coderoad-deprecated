import * as path from 'path';
import {open, set, openFolder} from '../atom/editor';
import {store} from '../_base';
import * as Action from '../actions/actions';
import {verifySetupComplete} from './setup-checks';

const packageData = `{
  "name": "demo",
  "dependencies": {
    "coderoad-functional-school": "^0.2.1"
  }
}`;

export function createPackageJson() {
  const packagePath = path.join(window.coderoad.dir, 'package.json');
  return new Promise((resolve, reject) => {
    open(packagePath);
    setTimeout(function() {
      resolve();
    });
  }).then(function() {
    set(packageData);
    verifySetupComplete();
  });
}

export function openDirectory() {
  return openFolder();
}

export function installTutorial() {
  return;
}
