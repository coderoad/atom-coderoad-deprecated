import * as ReactDOM from 'react-dom';

export const Root = {
  root: null,
  init: (): HTMLElement => {
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'crv');
    // mark panel visibility as hidden, triggers immediately
    this.root.hidden = true;
    return this.root;
  },
  toggle: () => this.root.hidden = !this.root.hidden,
  unmount: () => ReactDOM.unmountComponentAtNode(this.root)
};
