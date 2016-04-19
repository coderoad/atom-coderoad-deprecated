"use strict";
var React = require('react');
var IconMenu_1 = require('material-ui/IconMenu');
var Divider_1 = require('material-ui/Divider');
var Quit_1 = require('./Quit');
var issuesLink_1 = require('./issuesLink');
var menuIconRight_1 = require('./menuIconRight');
var menuRightRouteOptions_1 = require('./menuRightRouteOptions');
var origin = { horizontal: 'right', vertical: 'top' };
function menuRight(route) {
    return (React.createElement(IconMenu_1.default, {iconButtonElement: menuIconRight_1.menuIconRight(), targetOrigin: origin, anchorOrigin: origin}, menuRightRouteOptions_1.menuRightRouteOptions(route), issuesLink_1.issuesLink(), React.createElement(Divider_1.default, null), React.createElement(Quit_1.Quit, null)));
}
exports.menuRight = menuRight;
