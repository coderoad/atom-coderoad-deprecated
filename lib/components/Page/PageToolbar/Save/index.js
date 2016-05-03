"use strict";
var React = require('react');
var FlatButton_1 = require('material-ui/FlatButton');
var editor_1 = require('../../../../atom/editor');
var Save = function () { return (React.createElement(FlatButton_1.default, {label: 'Save', secondary: true, onTouchTap: editor_1.save})); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Save;
