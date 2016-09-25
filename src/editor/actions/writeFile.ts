import { mkdirSync, readFile, writeFile } from 'fs';
import fileExists from 'node-file-exists';
import { join } from 'path';

/**
 * writes content to a user file
 * @param  {} {to user file path
 * @param  {} content text editor content
 * @param  {} dir} user directory
 */
export function writeFileFromContent({to, content, dir}): void {
  const toAbs = join(dir, to);
  createFolder({dir, to}).then(() => {
    writeFile(toAbs, content, (writeErr) => {
      if (writeErr) {
        console.log(`Error: tried but failed to write to ${toAbs} with: ${content}`, writeErr);
      }
      console.log('wrote file: ', toAbs);
    });
  });
}

/**
 * writes from a tutorial file to a user file
 * @param  {} {to user file path
 * @param  {} from tutorial file path
 * @param  {} dir user directory
 * @param  {} tutorialDir} tutorial directory
 * @returns void
 */
export function writeFileFromFile({to, from, dir, tutorialDir}): void {
  const toAbs = join(dir, to);
  const fromAbs = join(tutorialDir, from);

  createFolder({dir, to}).then(() => {
    // writes { to: './dest.js', from: '' }
    readFile(fromAbs, 'utf8', (readErr, data) => {
      const err = `Error: tried to write '${fromAbs}' to '${toAbs}' but failed.`;
      if (readErr) { console.log(err, readErr); }
      writeFile(toAbs, data, (writeErr) => {
        if (writeErr) { console.log(writeErr); }
        console.log(`wrote file contents of ${to} to ${from}`);
      });
    });
  });
}

/**
 * create user folder 
 * @param  {} {dir user directory
 * @param  {} to} user folder path
 */
function createFolder({dir, to}): Promise<any> {
  return new Promise((resolve, reject) => {
    // extract folders without final file name
    const folders = to.split('/').slice(0, -1);
    if (folders.length === 0) {
      resolve();
    } else {
      let current: string[] = [];
      // write each missing folder
      folders.forEach((x: string) => {
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
