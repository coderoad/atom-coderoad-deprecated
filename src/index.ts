import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {sideElement, SideRoot} from './components/SidePanel';
import {loadPolyfills, render} from 'core-coderoad';
import Subscriptions from './subscriptions';
import addToStatusBar from './components/StatusBar';
// activate Redux
import store from './store';
import {setupVerify} from './modules/setup';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

class Main {
  side: HTMLElement;
  statusBarTile: StatusBar.IStatusBarView;
  subscriptions: any;
  constructor() {
    injectTapEventPlugin(); // remove later
    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());
    this.side = sideElement.init();
    this.subscriptions = new Subscriptions;
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.side,
      priority: 0,
    });
    // activate subscriptions
    this.subscriptions.onActivate(store);
    // render React component
    ReactDOM.render(SideRoot(store), this.side);
  }
  consumeStatusBar(statusBar) {
    this.statusBarTile = addToStatusBar(store, statusBar);
  }
  deactivate(): void {
    // remove bottom status bar icon
    if (this.statusBarTile) {
      this.statusBarTile.destroy();
      this.statusBarTile = null;
    }
    // remove subscriptions & unmount react app
    this.subscriptions.onDeactivate(store);
    // unmount React
    sideElement.unmount();
  }
};
export = new Main();
