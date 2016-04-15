import commandLine from '../../services/command-line';

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
        let mins = matchVersions(minVersion);
        if (!!mins) {
          let resMins = matchVersions(res);
          let firstDigit = parseInt(resMins[1], 10);
          let firstVersion = parseInt(mins[1], 10);
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
