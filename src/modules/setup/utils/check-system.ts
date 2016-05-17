import commandLine from 'atom-plugin-command-line';

function matchVersions(v: string): string[] {
  return v.match(/([0-9]+)\.([0-9]+)/);
}

function minVersion(command: string, minVersion: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let minOrLater: Promise<boolean> = commandLine(command, '-v')
      .then((res: string) => {
        // not installed
        if (parseInt(res, 10).toString() === 'NaN') {
          return false;
        }
        // two digits, ex: 0.10
        const mins = matchVersions(minVersion);
        if (!!mins) {
          const resMins = matchVersions(res);
          const firstDigit = parseInt(resMins[1], 10);
          const firstVersion = parseInt(mins[1], 10);
          return firstDigit > firstVersion ||
            firstDigit === firstVersion && parseInt(resMins[2], 10) >= parseInt(firstVersion[2], 10);
        } else {
          // single digit, ex: 3.0
          return parseInt(res, 10) >= parseInt(minVersion, 10);
        }
      });
    if (!minOrLater) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
}

export function npmMinVersion(): Promise<boolean> {
  return minVersion('npm', '3');
}

export function nodeMinVersion(): Promise<boolean> {
  return minVersion('node', '0.10');
}

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
