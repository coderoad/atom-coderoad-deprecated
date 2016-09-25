import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as actions from './actions';
import {SideRoot, sideElement} from './components/SidePanel';
import addToStatusBar from './components/StatusBar';
import {setupVerify} from './modules/setup';
import store from './store';
import loadPolyfills from './utils/polyfills';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

class Main {
  public editor: any;
  private side: HTMLElement;
  private statusBarTile: StatusBar.IStatusBarView|null;
  private subscriptions: any;
  constructor(editor) {
    injectTapEventPlugin(); // remove later
    loadPolyfills();

    this.editor = editor;
    // run startup checks
    store.dispatch(setupVerify());
    this.side = sideElement.init();
    this.subscriptions = new editor.Subscriptions();
  }
  public activate(): void {
    // create editor panel
    this.editor.addRightPanel(this.side);
    // activate subscriptions
    this.subscriptions.onActivate(store, actions);
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
export default Main;
