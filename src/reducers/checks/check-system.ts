import commandLine from '../../services/command-line';

export function npmVersionThreeOrLater(): Promise<boolean> {
  const minVersion = 3;
  return new Promise((resolve, reject) => {
    let threeOrLater: Promise<boolean> = commandLine('npm', '-v').then((res: string) => parseInt(res, 10) >= minVersion);
    if (!threeOrLater) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
}
