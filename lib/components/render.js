'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var Action = require('../actions/actions');
var _base_1 = require('../_base');
var app_1 = require('./app/app');
require('./remove-later');
var rootName = 'crv';
function render(target) {
    ReactDOM.render(React.createElement(react_redux_1.Provider, {store: _base_1.store}, 
        React.createElement(app_1.default, null)
    ), target);
}
exports.render = render;
function unmount(target) {
    ReactDOM.unmountComponentAtNode(target);
}
exports.unmount = unmount;
function initRoot() {
    var root = document.createElement('div');
    root.setAttribute('id', rootName);
    root.hidden = true;
    if (!!window.coderoad.dir) {
        _base_1.store.dispatch(Action.loadTutorials());
    }
    return root;
}
exports.initRoot = initRoot;
function togglePanel() {
    document.getElementById(rootName).hidden = !document.getElementById(rootName).hidden;
}
exports.togglePanel = togglePanel;
