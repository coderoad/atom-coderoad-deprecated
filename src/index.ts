import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {addRightPanel} from './editor/ui';

import {SideRoot, sideElement} from './components/SidePanel';
import addToStatusBar from './components/StatusBar';
import Subscriptions from './editor/subscriptions';
import {setupVerify} from './modules/setup';
import store from './store';
import loadPolyfills from './utils/polyfills';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// React optimization
process.env.NODE_ENV = 'production';

class Main {
  private side: HTMLElement;
  private statusBarTile: StatusBar.IStatusBarView|null;
  private subscriptions: any;
  constructor() {
    injectTapEventPlugin(); // remove later
    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());
    this.side = sideElement.init();
    this.subscriptions = new Subscriptions();
  }
  public activate(): void {
    // create editor panel
    addRightPanel(this.side);
    // activate subscriptions
    this.subscriptions.onActivate(store);
    // render React component
    ReactDOM.render(SideRoot(store), this.side);
  }
  public deactivate(): void {
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
  private consumeStatusBar(statusBar) {
    this.statusBarTile = addToStatusBar(store, statusBar);
  }
};
export = new Main();
