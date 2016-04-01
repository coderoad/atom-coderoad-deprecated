import * as path from 'path';
import * as fs from 'fs';

// other languages may handle comments differently
const comments = {
  py: '#'
};

function loaderRegex(fileType: string) {
  let comment = '\/{2,3}';
  if (comments[fileType]) {
    comment = comments[fileType];
  }
  return new RegExp(`^${comment} ?load\\(['"](.+)['"](\,\s?true)?\\)`, 'm');
}

export default function parseLoaders(data: string, fileType: string) {

  // loop over lines and add editor files
  let i = -1;
  let lines = data.split('\n');

  let filesLoaded = [];
  let loaderMatch = loaderRegex(fileType);

  while (i < lines.length - 1) {
    i += 1;
    let loader: string[] = lines[i].match(loaderMatch);

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
