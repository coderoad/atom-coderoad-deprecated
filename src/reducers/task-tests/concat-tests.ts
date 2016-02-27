import * as fs from 'fs';

export function concatTests(targetFile: string, files: any) {
  // delete previous file
  if (fs.existsSync(targetFile)) {
    fs.unlink(targetFile);
  }

  // load tests in order
  files.forEach(function(tests) {
    // path to file
    if (typeof tests === 'string') {
      readAppend(targetFile, test);

      // array of paths to file
    } else if (Object.prototype.toString.call(tests) === '[object Array]') {
      tests.forEach(function(test) {
        readAppend(targetFile, test);
      });
    }
  });
  return targetFile;
}

function readAppend(targetFile: string, file: string) {
  try {
    let data = fs.readFileSync(file, 'utf8');
    fs.appendFileSync(targetFile, data, 'utf8');
  } catch (e) {
    console.log('Error reading test file', e);
  }
}
