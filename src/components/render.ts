import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './SidePanel/root';
import store from '../store';

export default function render(target: HTMLElement) {
  ReactDOM.render(
    Root(store),
    target
  );
}
