import * as path from 'path';
import * as fs from 'fs';

const supportedFileTypes = ['js', 'jsx', 'ts', 'py'];
const js = /^\/\/\s?load\(['"`](.+)['"`](\,\s?true)?\)/m; // // load('file'),
const loaderMatch = {
  js,
  ts: js,
  jsx: js,
  py: /^#\s?load\(['"`](.+)['"`](,\s?true)?\)/m      // # load('file')
};

export default function parseLoaders(data: string, fileType: string) {

  if (supportedFileTypes.indexOf(fileType) < 0) {
    console.log(`File type "${fileType}" not supported.`);
    return '';
  }

  // loop over lines and add editor files
  let i = -1;
  let lines = data.split('\n');

  let filesLoaded = [];

  while (i < lines.length - 1) {
    i += 1;
    let loader: string[] = lines[i].match(loaderMatch[fileType]);

    if (loader) {
      // loader found
      let fileToLoad: string = loader[1];

      if (filesLoaded.indexOf(fileToLoad) > -1) {
        console.log(`"${fileToLoad}" already loaded.`);
        continue;
      }

      let pathToFile: string = null;
      if (loader[2]) {
        // path to file from tutorial directory
        pathToFile = path.normalize(path.join(window.coderoad.tutorialDir, fileToLoad));
      } else {
        // path to file from working directory
        pathToFile = path.normalize(path.join(window.coderoad.dir, fileToLoad));
      }

      lines[i] = fs.readFileSync(pathToFile, 'utf8');
    }
  }
  return lines.join('\n');
}
