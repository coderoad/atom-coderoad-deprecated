declare module 'atom' {
  export interface CompositeDisposable {
    constructor: () => any;
    dispose: () => any;
    add: (...disposables: AtomCore.Disposable[]) => any;
    remove: (disposable: AtomCore.Disposable) => any;
    clear: () => any;
  }
  export var CompositeDisposable;
}