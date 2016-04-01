import * as path from 'path';
import * as fs from 'fs';

const supportedFileTypes = ['js', 'jsx', 'ts', 'py'];
const js = /^\/\/\s?load\(['"`](.+)['"`]\)$/m;
const loaderMatch = {
  js,  // // load('file'),
  ts: js,
  jsx: js,
  py: /^#\s?load\(['"`](.+)['"`]\)$/m      // # load('file')
};

export default function parseLoaders(data: string, fileType: string) {

  if (supportedFileTypes.indexOf(fileType) < 0) {
    console.log(`File type "${fileType}" not supported.`);
    return '';
  }

  let imports = '';
  // loop over lines and add editor files
  let i = -1;
  let lines = data.split('\n');

  while (i < lines.length - 1) {
    i += 1;
    let loader: string[] = lines[i].match(loaderMatch[fileType]);

    if (loader) {
      // loader found
      let fileToLoad: string = loader[1];
      let pathToFile: string = path.normalize(path.join(window.coderoad.dir, fileToLoad));
      let file: string = fs.readFileSync(pathToFile, 'utf8');
      imports += file;
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
