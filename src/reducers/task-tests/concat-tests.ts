import * as fs from 'fs';

export function concatTests(targetFile: string, files: any): string {
  console.log('files', files);
  // delete previous file
  if (fs.existsSync(targetFile)) {
    fs.unlink(targetFile);
  }

  // load tests in order
  files.forEach((test: string) => {
    // ensure loaded synchronously
    return new Promise((resolve, reject) => {
      resolve(readAppend(targetFile, test));
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
