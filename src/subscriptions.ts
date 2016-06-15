import {CompositeDisposable} from 'atom';
import store from './store';
import {testRun, alertReplay, windowToggle} from './actions';

let subscriptions = null;

export function onActivate(store: Redux.Store): AtomCore.Disposable {
  // Atom Listeners
  subscriptions = new CompositeDisposable;

  subscriptions.add(
    atom.commands.add('atom-workspace', {
      'cr-viewer:toggle': () => store.dispatch(windowToggle())
    })
  );

  // run tests on save
  atom.workspace.observeTextEditors((editor: AtomCore.IEditor) => {
    subscriptions.add(editor.onDidSave(() => store.dispatch(testRun())));
  });
  // return all subscriptions
  return subscriptions;
}

export function onDeactivate(store: Redux.Store): void {
  // unsubscribe from Redux store
  store.subscribe(() => null);
  // cleanup subscriptions
  subscriptions.dispose();
}

export function addToStatusBar(statusBar) {
  let replay = document.createElement('div');
  // create status bar element
  replay.className = 'cr-alert-replay';
  replay.textContent = '▲';
  replay.onclick = () => store.dispatch(alertReplay());
  // consume with "atom status bar"
  return statusBar.addLeftTile({ item: replay, priority: 100 });
}
