import {join} from 'path';
import {open, set} from '../../atom/editor';
import {openFolder, openTerminal} from '../../atom/actions';
import commandLine from '../../services/command-line';
import {store} from '../../store/store';
import {verifySetup} from '../../actions/actions';

const packageData = `{
  "name": "demo",
  "dependencies": {
    "coderoad-functional-school": "^0.2.1"
  }
}`;

export function createPackageJson(): Promise<void> {
  const packagePath = join(window.coderoad.dir, 'package.json');
  return new Promise((resolve, reject) => {
    open(packagePath);
    setTimeout(function() {
      resolve();
    });
  }).then(function() {
    set(packageData);
    store.dispatch(verifySetup());
  });
}

export function openDirectory(): void {
  openFolder();
}

// export function installTutorial(): void {
//   commandLine('npm', 'install --save-dev coderoad-functional-school && npm install').then((res) => {
//     console.log(res);
//     store.dispatch(Action.verifySetup());
//   });
// }
