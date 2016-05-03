"use strict";
var _this = this;
var ReactDOM = require('react-dom');
exports.Root = {
    root: null,
    init: function () {
        _this.root = document.createElement('div');
        _this.root.setAttribute('id', 'crv');
        return _this.root;
    },
    unmount: function () { return ReactDOM.unmountComponentAtNode(_this.root); }
};
