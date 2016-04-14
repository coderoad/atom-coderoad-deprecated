import commandLine from '../../services/command-line';

export function canUpdateTutorial(name: string, currentVersion: string): string|void {
  let isLatest = commandLine('npm', `outdated ${name}`)
  .then((res) => {
    if (res.length > 0) {
      return res.match(/[0-9\.]+\s+[0-9\.]+\s+([0-9\.]+)/)[1];
    } else {
      return null;
    }
  });
}
