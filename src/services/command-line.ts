import {fileExists} from './exists';
import {exec} from 'child_process';

export default function commandLine(root: string,
  commands?: string): Promise<string> {

  // use root path for mac/linux (usr/local/bin, usr/bin), or windows (root)
  if (process.platform === 'darwin' && process.resourcesPath) {
    const localPath = '/usr/local/bin/' + root;
    const globalPath = '/usr/bin/' + root;
    if (fileExists(localPath)) {
      root = localPath;
    } else if (fileExists(globalPath)) {
      root = globalPath;
    } else {
      throw root + ' not found. Python may not be installed';
    }
  }

  const run = exec(`${root}${commands ? ' ' + commands : ''}`);

  return new Promise((resolve, reject) => {
    run.stdout.on('data', data => resolve(data));
    run.stderr.on('data', data => reject(data));
  });
}
