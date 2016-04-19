"use strict";
var React = require('react');
var IconButton_1 = require('material-ui/IconButton');
var mount_1 = require('../mount');
var close_1 = require('material-ui/svg-icons/navigation/close');
function menuIconLeft() {
    return (React.createElement(IconButton_1.default, {onClick: mount_1.togglePanel}, React.createElement(close_1.default, null)));
}
exports.menuIconLeft = menuIconLeft;
