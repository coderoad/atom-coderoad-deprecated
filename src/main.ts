import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as actions from './actions';
import {SideRoot, sideElement} from './components/SidePanel';
import addToStatusBar from './components/StatusBar';
import {setupVerify} from './modules/setup';

import loadPolyfills from './utils/polyfills';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// React optimization
process.env.NODE_ENV = 'production';

export default class Main {
  public store: Redux.Store;
  private side: HTMLElement;
  private statusBarTile: StatusBar.IStatusBarView|null;
  private subscriptions: any;
  constructor(public editor) {
    injectTapEventPlugin(); // remove later
    loadPolyfills();

    this.side = sideElement.init();
    this.subscriptions = new editor.Subscriptions();
  }
  public activate(): void {
     // create store after activation
    this.store = require('./store').default;
    // verify setup once ui is created
    this.store.dispatch(setupVerify());
    // create editor panel
    this.editor.addRightPanel(this.side);
    // activate subscriptions
    this.subscriptions.onActivate(this.store, actions);
    // render React component
    ReactDOM.render(SideRoot(this.store), this.side);
  }
  public deactivate(): void {
    // remove bottom status bar icon
    if (this.statusBarTile) {
      this.statusBarTile.destroy();
      this.statusBarTile = null;
    }
    // remove subscriptions & unmount react app
    this.subscriptions.onDeactivate(this.store);
    // unmount React
    sideElement.unmount();
  }
  private consumeStatusBar(statusBar) {
    this.statusBarTile = addToStatusBar(this.store, statusBar);
  }
};
