import * as ReactDOM from 'react-dom';

const rootName = 'crv';
let root = null;

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
