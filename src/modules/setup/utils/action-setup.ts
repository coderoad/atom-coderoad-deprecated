import {join} from 'path';
import {open, set, openFolder, openTerminal} from 'core-coderoad';
import {setupVerify} from '../actions';

const packageData = `{
  "name": "demo",
  "dependencies": {
    "coderoad-functional-school": "^0.2.2"
  }
}`;

export function createPackageJson(dir: string): Promise<void> {
  const packagePath = join(dir, 'package.json');
  return new Promise((resolve, reject) => {
    open(packagePath);
    setTimeout(() => resolve());
  }).then(() => {
    set(packageData);
    // store.dispatch(setupVerify());
  });
}

export function openDirectory(): void {
  openFolder();
}
