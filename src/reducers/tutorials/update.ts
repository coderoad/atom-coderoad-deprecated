import commandLine from '../../services/command-line';
import store from '../../store';
import {tutorialsFind} from '../../actions';

export function tutorialUpdate(name: string): void {
  commandLine('npm', `install --save-dev ${name}`)
    .then(() => {
      store.dispatch(tutorialsFind());
    });
}

export function canUpdateTutorial(
  name: string, currentVersion: string
): Promise<boolean> | boolean {
  if (!navigator.onLine) {
    return false;
  }
  return (commandLine('npm', `outdated ${name}`).then(
    (res: string) => {
      console.log(res);
      if (res.length > 0) {
        let linked = res.match(/[0-9\.]+\s+linked/);
        if (linked) { return false; }
        let match = res.match(/[0-9\.]+\s+[0-9\.]+\s+([0-9\.]+)/);
        if (match.length >= 2) {
          // return match[1];
          return true;
        }
      }
      return false;
    })
  );
}
