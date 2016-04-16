'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {App} from './app';
import './remove-later';

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

const rootName = 'crv';
var root = null;

/**
 * Unmount React on deactivate
 */
export function unmount() {
  ReactDOM.unmountComponentAtNode(root);
}
export function initRoot(): HTMLElement {
  root = document.createElement('div');
  root.setAttribute('id', rootName);
  // mark panel visibility as hidden, triggers immediately
  root.hidden = true;
  return root;
}
export function togglePanel() {
  root.hidden = !root.hidden;
}
