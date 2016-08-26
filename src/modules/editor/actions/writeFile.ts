import { mkdirSync, readFile, writeFile } from 'fs';
import fileExists from 'node-file-exists';
import { join } from 'path';

export function writeFileFromContent({to, content, dir}) {
  const toAbs = join(dir, to);
  createFolders({dir, to}).then(() => {
    writeFile(toAbs, content, (writeErr) => {
      if (writeErr) {
        console.log(`Error: tried but failed to write to ${toAbs} with: ${content}`, writeErr);
      }
      console.log('wrote file: ', toAbs);
    });
  });
}

export function writeFileFromFile({to, from, dir, tutorialDir}) {
  const toAbs = join(dir, to);
  const fromAbs = join(tutorialDir, from);

  createFolders({dir, to}).then(() => {
    // writes { to: './dest.js', from: '' }
    readFile(fromAbs, 'utf8', (readErr, data) => {
      const err = `Error: tried to write '${fromAbs}' to '${toAbs}' but failed.`;
      if (readErr) { console.log(err, readErr); }
      writeFile(toAbs, data, (writeErr) => {
        if (err, writeErr) { console.log(writeErr); }
        console.log(`wrote file contents of ${to} to ${from}`);
      });
    });
  });
}

function createFolders({dir, to}) {
  return new Promise((resolve, reject) => {
    // extract folders without final file name
    const folders = to.split('/').slice(0, -1);
    if (folders.length === 0) {
      resolve();
    } else {
      let current = [];
      // write each missing folder
      folders.forEach(x => {
        current.push(x);
        const folderPath = join(dir, current.join('/'));
        if (!fileExists(folderPath)) {
          mkdirSync(folderPath);
        }
      });
      resolve();
    }
  });
}
