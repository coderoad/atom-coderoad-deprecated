import * as fs from 'fs';

export function fileExists(pathToFile: string): boolean {
  try {
    fs.accessSync(pathToFile, fs.R_OK | fs.W_OK);
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
