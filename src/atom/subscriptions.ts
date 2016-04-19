const CompositeDisposable = require('atom').CompositeDisposable;
import {store} from '../store';
import {testRun, alertReplay} from '../actions';
import {unmount, togglePanel} from '../components/mount';

let subscriptions = null;

export function onActivate(): AtomCore.Disposable {
  subscriptions = new CompositeDisposable;
  /**
   * Atom Listeners
   */
  subscriptions.add(
    atom.commands.add('atom-workspace', {
      'cr-viewer:toggle': togglePanel
    }));

  // run tests on save
  atom.workspace.observeTextEditors((editor: AtomCore.IEditor) => {
    subscriptions.add(
      editor.onDidSave(() => {
          store.dispatch(testRun());
      }));
  });
  /**
   * Key subscriptions
   */
  subscriptions.add(
    // run tests on hot key. See keymaps
    atom.commands.add('atom-workspace', {
      'cr-viewer:testRun': (() => {
        if (store.getState().route === 'page') {
          store.dispatch(testRun());
        }
      })
    })
    );
  return subscriptions;
}

export function onDeactivate(): void {
  // unmount React
  // TODO: animate close first
  window.onresize = null;
  unmount();
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
  return statusBar.addLeftTile({item: replay, priority: 100});
}
