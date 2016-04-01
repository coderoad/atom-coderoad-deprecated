import * as fs from 'fs';
import * as path from 'path';

function getPath(filePath: string) {
  return path.normalize(path.join(window.coderoad.dir, filePath));
}

export function write(filePath: string, text) {
  try {
    fs.writeFileSync(getPath(filePath), text, 'utf8');
  } catch (e) {
    if (e) { console.log('Error writing to filePath', filePath); }
  }
}

export function readWrite(writePath: string, readPath: string) {
  try {
    write(writePath, fs.readFileSync(getPath(readPath)));
  } catch (e) {
    if (e) { console.log('Error reading from filePath', readPath); }
  }
}
