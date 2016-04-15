import {accessSync, F_OK} from 'fs';

export function fileExists(pathToFile: string): boolean {
  try {
    accessSync(pathToFile, F_OK);
  } catch (e) {
    if (e) {
      if (e.code !== 'ENOENT') {
        console.log(e);
      }
      return false;
    }
  }
  return true;
}
