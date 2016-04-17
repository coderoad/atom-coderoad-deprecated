"use strict";
var ReactDOM = require('react-dom');
var rootName = 'crv';
var root = null;
function unmount() {
    ReactDOM.unmountComponentAtNode(root);
}
exports.unmount = unmount;
function initRoot() {
    root = document.createElement('div');
    root.setAttribute('id', rootName);
    root.hidden = true;
    return root;
}
exports.initRoot = initRoot;
function togglePanel() {
    root.hidden = !root.hidden;
}
exports.togglePanel = togglePanel;
