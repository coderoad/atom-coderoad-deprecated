"use strict";
var React = require('react');
var IconButton_1 = require('material-ui/IconButton');
var root_1 = require('../root');
var close_1 = require('material-ui/svg-icons/navigation/close');
function menuIconLeft() {
    return (React.createElement(IconButton_1.default, {onClick: root_1.Root.toggle}, React.createElement(close_1.default, null)));
}
exports.menuIconLeft = menuIconLeft;
