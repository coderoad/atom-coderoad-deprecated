import {isAboveVersion} from './compareVersions';
import commandLine from 'atom-plugin-command-line';

export const name = 'Atom';
export const minVersion = '1.8';

export const versionLabel = `${name} >= ${minVersion}`;

export const versionFailMessage = `
First make sure you have atom shell commands installed.
Click the atom menu and select "Install Shell Commands".

Otherwise, update your version of Atom.
Click on the blue "update" squirrel in the bottom right corner of your editor.`;

/**
 * checks that the version of atom is above a minimum version
 * @returns Promise
 */
export function isAboveMinVersion(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let minOrLater = commandLine('atom', '-v').then((res: string) => {
      let match = res.match(/Atom\s+:\s+([0-9]\.[0-9]\.[0-9])/);
      if (match && match[1] && isAboveVersion(match[1], minVersion)) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export const issuesPath = 'https://github.com/coderoad/atom-coderoad/issues';
