'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var _base_1 = require('../_base');
var app_1 = require('./app');
require('./remove-later');
function render(target) {
    ReactDOM.render(React.createElement(react_redux_1.Provider, {store: _base_1.store}, React.createElement(app_1.default, null)), target);
}
exports.render = render;
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
