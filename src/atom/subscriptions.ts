const CompositeDisposable = require('atom').CompositeDisposable;
import {store} from '../store/store';
import * as Action from '../actions/actions';
import {unmount, togglePanel} from '../components/render';

let subscriptions = null;

export function onActivate() {
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
          store.dispatch(Action.runTests());
      }));
  });
  /**
   * Key subscriptions
   */
  subscriptions.add(
    // run tests on hot key. See keymaps
    atom.commands.add('atom-workspace', {
      'cr-viewer:runTests': (() => {
        if (store.getState().route === 'page') {
          store.dispatch(Action.runTests());
        }
      })
    })
    );
  return subscriptions;
}

export function onDeactivate() {
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
  replay.onclick = () => store.dispatch(Action.replayAlert());
  // consume with "atom status bar"
  return statusBar.addLeftTile({item: replay, priority: 100});
}
