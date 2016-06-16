import {CompositeDisposable} from 'atom';
import store from './store';
import {testRun, alertReplay, windowToggle} from './actions';

export default class Subscriptions {
  public subscriptions = new CompositeDisposable;

  onActivate(store: Redux.Store): AtomCore.Disposable {
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'cr-viewer:toggle': () => store.dispatch(windowToggle())
      })
    );
    // run tests on save
    atom.workspace.observeTextEditors((editor: AtomCore.IEditor) => {
      this.subscriptions.add(editor.onDidSave(() => store.dispatch(testRun())));
    });
    // return all subscriptions
    return this.subscriptions;
  }

  onDeactivate(store: Redux.Store): void {
    // unsubscribe from Redux store
    store.subscribe(() => null);
    // cleanup subscriptions
    this.subscriptions.dispose();
  }
}
