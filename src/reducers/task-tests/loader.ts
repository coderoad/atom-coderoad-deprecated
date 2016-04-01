import * as fs from 'fs';
import * as path from 'path';

function unlink(targetFile: string) {
  return new Promise((resolve) => {
    if (fs.existsSync(targetFile)) {
      fs.unlink(targetFile);
    }
    resolve();
  });
}

function readAppend(targetFile: string, file: string): boolean {
  try {
    let data = fs.readFileSync(file, 'utf8');
    fs.appendFileSync(targetFile, data, 'utf8');
    return true;
  } catch (e) {
    console.log('Error reading test file', e);
  }
}

function concatTests(targetFile: string, files: any): string {
  // delete previous file
  unlink(targetFile).then(() => {
    // load tests in order
    files.forEach((testPath: string) => {
      // ensure loaded synchronously
      return new Promise((resolve) => {
        resolve(readAppend(targetFile, testPath));
      });
    });
  });
  return;
}

export default function load(targetFile: string, files: any) {
  concatTests(targetFile, files);
}
