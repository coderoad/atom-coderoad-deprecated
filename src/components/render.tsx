'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as Action from '../actions/actions';
import {store} from '../_base';
import App from './app/app';
import './remove-later';

const rootName = 'crv';

/**
 * Render react component on activate
 */
export function render(target: HTMLElement) {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    target
  );
}

/**
 * Unmount React on deactivate
 */
export function unmount(target: HTMLElement) {
  ReactDOM.unmountComponentAtNode(target);
}

export function initRoot(canStart: boolean) {
  var root = document.createElement('div');
  root.setAttribute('id', rootName);
  // mark panel visibility as hidden, triggers immediately
  root.hidden = true;
  if (!!global.coderoad.dir) {
    store.dispatch(Action.loadTutorials());
  }
  return root;
}

export function togglePanel() {
  document.getElementById(rootName).hidden = !document.getElementById(rootName).hidden;
}
