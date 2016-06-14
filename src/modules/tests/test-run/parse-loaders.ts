import {normalize, join} from 'path';
import {readFileSync} from 'fs';

// TODO: load comments from core-coderoad

const comments = {
  py: '#',
  js: '\/{2,3}',
};

function loaderRegex(fileType: string): RegExp {
  let comment = '\/{2,3}';
  if (comments[fileType]) {
    comment = comments[fileType];
  }
  return new RegExp(`^${comment} ?load\\(['"](.+)['"](\, ?true)?\\)`, 'm');
}

export default function parseLoaders(
  data: string, fileType: string, tutorial: CR.Tutorial, dir: string
): string {

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
        // path to file from config specified dir
        pathToFile = normalize(join(tutorial.config.dir, fileToLoad));
      } else {
        // path to file from working directory
        pathToFile = normalize(join(dir, fileToLoad));
      }

      try {
        lines[i] = readFileSync(pathToFile, 'utf8');
      } catch (e) {
        let message = 'File not found: ' + pathToFile;
        lines[i] = message;
        console.log(message);
      }
    }
  }
  return lines.join('\n');
}
