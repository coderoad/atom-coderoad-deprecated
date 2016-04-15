import commandLine from '../../services/command-line';
import {store} from '../../store/store';
import {verifySetup} from '../../actions/actions';

export function updateNpm(): void {
  commandLine('npm', 'update -g npm')
    .then((res) => {
    store.dispatch(verifySetup());
  });
}
