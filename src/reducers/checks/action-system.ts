import commandLine from '../../services/command-line';
import {store} from '../../store/store';
import {setupVerify} from '../../actions/_actions';

export function updateNpm(): void {
  commandLine('npm', 'update -g npm')
    .then((res) => {
    store.dispatch(setupVerify());
  });
}
