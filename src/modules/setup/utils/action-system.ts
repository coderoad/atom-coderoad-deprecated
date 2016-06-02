import commandLine from 'atom-plugin-command-line';
import {setupVerify} from '../actions';

export function updateNpm(): void {
  commandLine('npm', 'update -g npm')
    .then((res) => {
      // store.dispatch(setupVerify());
    });
}
