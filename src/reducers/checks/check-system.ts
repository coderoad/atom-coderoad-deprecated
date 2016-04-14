import commandLine from '../../services/command-line';

function minVersion(command: string, minVersion: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let minOrLater: Promise<boolean> = commandLine(command, '-v')
      .then((res: string) => {
        // not installed
        if (parseInt(res, 10).toString() === 'NaN') {
          return false;
        }
        // two digits, ex: 0.10
        let hasSecondDigit = res.match(/([0-9]+)\.([0-9]+)/);
        if (!!hasSecondDigit) {
          let versions = minVersion.match(/([0-9]+)\.([0-9]+)/);
          let firstDigit = parseInt(hasSecondDigit[1], 10);
          let firstVersion = parseInt(versions[1], 10);
          return firstDigit > firstVersion ||
            firstDigit === firstVersion && parseInt(hasSecondDigit[2], 10) >= parseInt(firstVersion[2], 10);
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
