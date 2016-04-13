import * as path from 'path';
import {open, set} from '../../atom/editor';
import {openFolder, openTerminal} from '../../atom/actions';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';

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
    store.dispatch(Action.verifySetup());
  });
}

export function openDirectory() {
  return openFolder();
}

export function installTutorial() {
  return openTerminal();
}
