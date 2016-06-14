import * as ReactDOM from 'react-dom';

const sidePanelElement = {
  root: null,
  init() {
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'crv');
    return this.root;
  },
  unmount() {
    ReactDOM.unmountComponentAtNode(this.root);
  }
};
export default sidePanelElement;
