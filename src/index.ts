import * as React from 'react';
import sidePanelElement from './components/SidePanel/element';
import sidePanelRoot from './components/SidePanel/root';
import {loadPolyfills, render} from 'core-coderoad';
import {onActivate, onDeactivate, addToStatusBar} from './subscriptions';
// activate Redux
import store from './store';
import {setupVerify} from './modules/setup';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

class Main {
  root: HTMLElement;
  statusBarTile: StatusBar.IStatusBarView;
  constructor() {
    injectTapEventPlugin(); // remove later
    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());
    this.root = sidePanelElement.init();
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.root,
      priority: 0,
    });
    onActivate();
    // render React component
    render(this.root, sidePanelRoot(store));
  }
  consumeStatusBar(statusBar) {
    this.statusBarTile = addToStatusBar(statusBar);
  }
  deactivate(): void {
    // remove bottom status bar icon
    if (this.statusBarTile) {
      this.statusBarTile.destroy();
      this.statusBarTile = null;
    }
    // remove subscriptions & unmount react app
    onDeactivate();
  }
};
export = new Main();
