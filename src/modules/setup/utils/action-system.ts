import commandLine from '../../../services/command-line';
import {setupVerify} from '../actions';

export function updateNpm(): void {
  commandLine('npm', 'update -g npm')
    .then((res) => {
      // store.dispatch(setupVerify());
    });
}
