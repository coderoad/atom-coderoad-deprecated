"use strict";
var React = require('react');
var IconMenu_1 = require('material-ui/IconMenu');
var Divider_1 = require('material-ui/Divider');
var Quit_1 = require('./Quit');
var menuIconRight_1 = require('./menuIconRight');
var menuRightRouteOptions_1 = require('./menuRightRouteOptions');
var origin = {
    horizontal: 'right',
    vertical: 'top',
};
function menuRight(route) {
    return (React.createElement(IconMenu_1.default, {iconButtonElement: menuIconRight_1.default(), targetOrigin: origin, anchorOrigin: origin}, menuRightRouteOptions_1.default(route), React.createElement(Divider_1.default, null), React.createElement(Quit_1.default, null)));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = menuRight;
