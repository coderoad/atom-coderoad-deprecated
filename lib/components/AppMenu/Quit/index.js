"use strict";
var React = require('react');
var subscriptions_1 = require('../../../subscriptions');
var MenuItem_1 = require('material-ui/MenuItem');
var styles = {
    textAlign: 'center',
    padding: '0px 2px',
};
var Quit = function () { return (React.createElement(MenuItem_1.default, {style: styles, key: 'quit', onClick: subscriptions_1.onDeactivate}, "quit")); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Quit;
