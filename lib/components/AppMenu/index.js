"use strict";
var React = require('react');
var AppBar_1 = require('material-ui/AppBar');
var menuIconLeft_1 = require('./menuIconLeft');
var menuRight_1 = require('./menuRight');
exports.AppMenu = function (_a) {
    var route = _a.route;
    return (React.createElement(AppBar_1.default, {title: 'CodeRoad', className: 'cr-menu-bar', iconElementLeft: menuIconLeft_1.menuIconLeft(), iconElementRight: menuRight_1.menuRight(route)}));
};
