import commandLine from '../../services/command-line';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';

export function updateNpm(): void {
  commandLine('npm', 'update -g npm')
    .then((res) => {
      console.log(res);
    store.dispatch(Action.verifySetup());
  });
}
