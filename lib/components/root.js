"use strict";
var _this = this;
var ReactDOM = require('react-dom');
exports.Root = {
    root: null,
    init: function () {
        _this.root = document.createElement('div');
        _this.root.setAttribute('id', 'crv');
        _this.root.hidden = true;
        return _this.root;
    },
    toggle: function () { return _this.root.hidden = !_this.root.hidden; },
    unmount: function () { return ReactDOM.unmountComponentAtNode(_this.root); }
};
