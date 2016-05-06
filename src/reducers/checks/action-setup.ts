import {join} from 'path';
import {open, set} from '../../atom/editor';
import {openFolder, openTerminal} from '../../atom/editor';
import commandLine from '../../services/command-line';
import store from '../../store';
import {setupVerify} from '../../actions';

const packageData = `{
  "name": "demo",
  "dependencies": {
    "coderoad-functional-school": "^0.2.1"
  }
}`;

export function createPackageJson(): Promise<void> {
  const dir = store.getState().dir;
  const packagePath = join(dir, 'package.json');
  return new Promise((resolve, reject) => {
    open(packagePath);
    setTimeout(() => {
      resolve();
    });
  }).then(() => {
    set(packageData);
    store.dispatch(setupVerify());
  });
}

export function openDirectory(): void {
  openFolder();
}
