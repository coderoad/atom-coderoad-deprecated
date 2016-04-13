'use strict';
import * as React from 'react';
import {render, initRoot, togglePanel} from '../components/render';
import loadPolyfills from '../services/polyfills';
import {onActivate, onDeactivate, addToStatusBar} from './subscriptions';

class Main {
  root: HTMLElement;
  statusBarTile: StatusBar.IStatusBarView;
  constructor() {
    window.coderoad = {
      dir: null
    };
    loadPolyfills();
    this.root = initRoot();
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.root,
      priority: 0
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
    togglePanel();
  }
};
export = new Main();
