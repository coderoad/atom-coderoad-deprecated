"use strict";
var ReactDOM = require('react-dom');
var root_1 = require('./SidePanel/root');
var store_1 = require('../store');
function render(target) {
    ReactDOM.render(root_1.default(store_1.default), target);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
