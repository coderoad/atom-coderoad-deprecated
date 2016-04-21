"use strict";
var React = require('react');
var FlatButton_1 = require('material-ui/FlatButton');
var editor_1 = require('../../../../atom/editor');
exports.Save = function () { return (React.createElement(FlatButton_1.default, {label: 'Save', secondary: true, onTouchTap: editor_1.save})); };
