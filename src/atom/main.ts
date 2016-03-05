'use strict';
import * as React from 'react';
import {render, initRoot, togglePanel} from '../components/render';
import loadPolyfills from '../services/polyfills';
import {onActivateSubscriptions, onDeactivateSubscriptionsAndUnmount, addToStatusBar} from './subscriptions';
import {setAtomGlobals} from './editor';

class Main {
  root: HTMLElement;
  statusBarTile: StatusBar.IStatusBarView;
  constructor() {
    window.coderoad = {
      dir: null,
      setup: {}
    };
    loadPolyfills();
    setAtomGlobals();
    this.root = initRoot();
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.root
    });
    onActivateSubscriptions();
    // render React component
    render(this.root);
  }
  consumeStatusBar(statusBar) {
    this.statusBarTile = addToStatusBar(statusBar);
  }
  deactivate(): void {
    if (this.statusBarTile) {
      this.statusBarTile.destroy();
      this.statusBarTile = null;
    }
    onDeactivateSubscriptionsAndUnmount();
  }
  toggle(): void {
    togglePanel();
  }
};
export = new Main();
