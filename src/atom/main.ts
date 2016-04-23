import * as React from 'react';
import {render} from '../components/render';
import {Root} from '../components/root';
import loadPolyfills from '../services/polyfills';
import {onActivate, onDeactivate, addToStatusBar} from './subscriptions';

import {store} from '../store';
import {setupVerify} from '../actions';

class Main {
  root: HTMLElement;
  statusBarTile: StatusBar.IStatusBarView;
  constructor() {
    loadPolyfills(); // remove with later version of Chrome
    store.dispatch(setupVerify());
    this.root = Root.init();
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.root,
      priority: 0,
    });
    onActivate();
    // render React component
    render(this.root);
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
  toggle(): void {
    Root.toggle();
  }
};
export = new Main();
