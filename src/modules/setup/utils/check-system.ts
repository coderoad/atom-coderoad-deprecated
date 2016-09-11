import commandLine from 'atom-plugin-command-line';

const versions = {
  node: '4.0.0',
  atom: '1.8.0',
  npm: '3.0.0'
};

/**
 * extracts versions intro array from a string
 * "0.1.0" -> ['0', '1', '0']
 * or returns null
 * @param  {string} v
 */
function matchVersions(v: string): string[]|null {
  return v.match(/([0-9]+)\.([0-9]+)/);
}

/**
 * checks that a version is >= b version
 * @param  {string} a
 * @param  {string} b
 * @returns boolean
 */
function isAboveVersion(a: string, b: string): boolean {
  if (a === b) { return true; }
  const a_components = a.split('.');
  const b_components = b.split('.');
  const len = Math.min(a_components.length, b_components.length);
  for (let i = 0; i < len; i++) {
    const first = parseInt(a_components[i], 10);
    const second = parseInt(b_components[i], 10);
    if (first > second) { return true; }
    if (first < second) { return false; }
  }
  if (a_components.length > b_components.length) { return true; }
  if (a_components.length < b_components.length) { return false; }
  return true;
}

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
 * checks that the version of atom is above a minimum version
 * @returns Promise
 */
export function atomMinVersion(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let minOrLater = commandLine('atom', '-v').then((res: string) => {
      let match = res.match(/Atom\s+:\s+([0-9]\.[0-9]\.[0-9])/);
      if (match && match[1] && isAboveVersion(match[1], versions.atom)) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

/**
 * checks if is a mac
 * checks if xcode is installed
 * sets true if mac & !xcode, else false
 * @returns Promise
 */
export function requiresXCode(): Promise<boolean> | boolean {
  if (!navigator.platform.match(/Mac/)) {
    return true;
  }
  return commandLine('xcode-select', '-v').then((res: string) => {
    if (!!res.match(/xcode-select version [0-9]+/)) {
      return true;
    }
    return false;
  });
}
