import { join } from 'path';
import { open, openFolder, openTerminal, set } from '../../editor';

const packageData = `{
  "name": "demo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "coderoad-functional-school": "^1.1.3"
  }
}`;

/**
 * creates a basic package.json file in the users directory
 * @param  {string} dir
 * @returns Promise
 */
export function createPackageJson(dir: string): Promise<void> {
  const packagePath = join(dir, 'package.json');
  return new Promise((resolve, reject) => {
    open(packagePath);
    setTimeout(() => resolve());
  }).then(() => {
    set(packageData);
  });
}

/**
 * opens a directory
 * @returns void
 */
export function openDirectory(): void {
  openFolder();
}
