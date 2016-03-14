import * as fs from 'fs';

function unlink(targetFile) {
  return new Promise((resolve) => {
    if (fs.existsSync(targetFile)) {
      fs.unlink(targetFile);
    }
    resolve();
  });
}

export function concatTests(targetFile: string, files: any): string {
  // delete previous file
  unlink(targetFile).then(function () {
    // load tests in order
    files.forEach((test: string) => {
      // ensure loaded synchronously
      return new Promise((resolve) => {
        resolve(readAppend(targetFile, test));
      });
    });
  });
  return targetFile;
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
