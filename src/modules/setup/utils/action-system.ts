import {setupVerify} from '../actions';
import commandLine from 'atom-plugin-command-line';

export function updateNpm(): void {
  commandLine('npm', 'update -g npm')
    .then((res) => {
      // store.dispatch(setupVerify());
    });
}
