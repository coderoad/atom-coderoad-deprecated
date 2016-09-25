import {isAboveVersion} from '../../../utils/compareVersions';
import {isMac} from '../../../utils/system';
import commandLine from 'atom-plugin-command-line';

const versions = {
  node: '4.0.0',
  npm: '3.0.0'
};


/**
 * calls command line to check that system version is above requirement
 * @param  {string} command
 * @param  {string} minVersion
 * @returns Promise
 */
export function minVersion(command: string): Promise<boolean> {
  const minVersion = versions[command];
  return new Promise((resolve, reject) => {
    let minOrLater: Promise<boolean> = commandLine(command, '-v')
      .then((res: string) => isAboveVersion(res, minVersion));
    if (!minOrLater) {
      resolve (false);
    } else {
      resolve(true);
    }
  });
}



/**
 * checks if is a mac
 * checks if xcode is installed
 * sets true if mac & !xcode, else false
 * @returns Promise
 */
export function hasOrDoesNotRequireXCode(): Promise<boolean> | boolean {
  if (!isMac) {
    return true;
  }
  return commandLine('xcode-select', '-v').then((res: string) => {
    if (!!res.match(/xcode-select version [0-9]+/)) {
      return true;
    }
    return false;
  });
}
