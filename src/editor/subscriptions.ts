import {CompositeDisposable} from 'atom';

export default class Subscriptions {
  private subscriptions = new CompositeDisposable();

  public onActivate(store: Redux.Store<any>, actions): AtomCore.Disposable {
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'cr-viewer:toggle': () => store.dispatch(actions.windowToggle())
      })
    );
    // run tests on save
    atom.workspace.observeTextEditors((editor: AtomCore.IEditor) => {
      this.subscriptions.add(editor.onDidSave(() => store.dispatch(actions.testRun())));
    });
    // return all subscriptions
    return this.subscriptions;
  }

  public onDeactivate(store: Redux.Store<any>): void {
    // unsubscribe from Redux store
    store.subscribe(() => null);
    // cleanup subscriptions
    this.subscriptions.dispose();
  }
}
