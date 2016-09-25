import * as React from 'react';

import {isAboveVersion} from './compareVersions';
import commandLine from 'atom-plugin-command-line';

export const name = 'Atom';
export const minVersion = '1.8';

export const editorVersionLabel = `${name} >= ${minVersion}`;

export const editorVersionFailMessage = (
  <div>
    <p>First make sure you have atom shell commands installed.
    Click the atom menu and select "Install Shell Commands".</p>
    <p>Otherwise, update your version of Atom.<br />
    Click on the blue "update" squirrel in the bottom right corner of your editor.</p>
  </div>
);

/**
 * checks that the version of atom is above a minimum version
 * @returns Promise
 */
export function editorMinVersion(): Promise<boolean> {
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

export const editorIssuesPath = 'https://github.com/coderoad/atom-coderoad/issues';
