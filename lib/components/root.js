"use strict";
var _this = this;
var ReactDOM = require('react-dom');
var Root = {
    root: null,
    init: function () {
        _this.root = document.createElement('div');
        _this.root.setAttribute('id', 'crv');
        return _this.root;
    },
    unmount: function () {
        ReactDOM.unmountComponentAtNode(_this.root);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
