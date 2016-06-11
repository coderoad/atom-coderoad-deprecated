import {join} from 'path';
import {readFileSync} from 'fs';
import fileExists from 'node-file-exists';

export function readPackageJson(dir: string): Object|boolean {
  const pathToPJ = join(dir, './package.json');
  if (!fileExists(pathToPJ)) { return false; }
  try {
    return JSON.parse(readFileSync(pathToPJ, 'utf8'));
  } catch (e) {
    return null;
  }
}
