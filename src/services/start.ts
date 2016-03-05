import {fileExists} from './exists';
import * as path from 'path';
import {open, set} from '../atom/editor';

const packageData = `{
"name": "demo",
"dependencies": {
  "coderoad-functional-school": "^0.1.9"
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
    window.coderoad.setup.hasPackageJson = true;
  });
}

function checkSetup() {
  const packagePath = path.join(window.coderoad.dir, 'package.json');
  if (fileExists(packagePath)) {
    window.coderoad.setup.hasPackageJson = true;
  }

}
// export function installTutorial() {}
