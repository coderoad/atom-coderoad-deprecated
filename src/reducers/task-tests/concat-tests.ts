import * as fs from 'fs';

export function concatTests(targetFile: string, files: any): string {
  // delete previous file
  if (fs.existsSync(targetFile)) {
    fs.unlink(targetFile);
  }

  // load tests in order
  files.forEach((test: string) => readAppend(targetFile, test));
  return targetFile;
}

function readAppend(targetFile: string, file: string): void {
  try {
    let data = fs.readFileSync(file, 'utf8');
    fs.appendFileSync(targetFile, data, 'utf8');
    return;
  } catch (e) {
    console.log('Error reading test file', e);
  }
}
