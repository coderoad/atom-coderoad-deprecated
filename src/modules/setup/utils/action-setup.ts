import { resolve } from 'path';

import { open, openFolder, openTerminal, set } from '../../../selectors';
import { setupVerify } from '../actions';

const packageData = `{
  "name": "demo",
  "dependencies": {
    "coderoad-functional-school": "^0.2.2"
  }
}`;

export function createPackageJson(dir: string): Promise<void> {
  const packagePath = resolve(dir, 'package.json');
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
