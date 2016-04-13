import commandLine from '../../services/command-line';

const minVersion = 3;
export function npmVersionThreeOrLater(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let threeOrLater: Promise<boolean> = commandLine('npm', '-v').then((res: string) => parseInt(res, 10) >= minVersion);
    if (!threeOrLater) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
}
