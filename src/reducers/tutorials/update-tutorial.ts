import commandLine from '../../services/command-line';
import {store} from '../../store/store';
import {tutorialsFind} from '../../actions/_actions';

export function tutorialUpdate(name: string): void {
  commandLine('npm', `install --save-dev ${name}`)
  .then(() => {
    store.dispatch(tutorialsFind());
  });
}

// export function canUpdateTutorial(name: string,
//   currentVersion: string): Promise<boolean> {
//     console.log(name, currentVersion);
//   return (commandLine('npm', `outdated ${name}`)
//     .then((res: string) => {
//       console.log(res);
//     if (res.length > 0) {
//       let match = res.match(/[0-9\.]+\s+[0-9\.]+\s+([0-9\.]+)/);
//       if (match.length >= 2) {
//         // return match[1];
//         return true;
//       }
//     }
//     return false;
//   }));
// }
