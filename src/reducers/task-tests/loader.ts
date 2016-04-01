import * as fs from 'fs';
import * as path from 'path';

const loaderMatch = {
  js: /^\/\/\s?load\(['"`](.+)['"`]\)$/,
  py: /\#\s?load\(['"`](.+)['"`]\)$/
};

function unlink(targetFile: string) {
  return new Promise((resolve) => {
    if (fs.existsSync(targetFile)) {
      fs.unlink(targetFile);
    }
    resolve();
  });
}

function parseLoaders(data: string, fileType: string) {
  let lines = data.split('\n');
  let imports = '';
  // loop over lines and add editor files
  let i = 0;
  while (i < lines.length - 1) {
    i += 1;
    let loader: string[] = lines[i].match(loaderMatch[fileType]);

    if (loader) {
      // loader found
      let fileToLoad: string = loader[1];
      let pathToFile: string = path.normalize(path.join(window.coderoad.dir, fileToLoad));
      imports.concat(fs.readFileSync(pathToFile, 'utf8'));
    }
  }

  let output: string = null;
  if (imports.length > 0) {
    output = imports + '\n'.concat(data);
  } else {
    output = data;
  }
  return output;
}

function readAppend(targetFile: string, file: string): boolean {
  try {
    let data = fs.readFileSync(file, 'utf8');
    let fileType = targetFile.substr(targetFile.lastIndexOf('.') + 1, targetFile.length);
    let output = parseLoaders(data, fileType);
    fs.appendFileSync(targetFile, output, 'utf8');
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
