"use strict";
var React = require('react');
var list_1 = require('material-ui/lib/lists/list');
var list_item_1 = require('material-ui/lib/lists/list-item');
var raised_button_1 = require('material-ui/lib/raised-button');
var Subheader_1 = require('material-ui/lib/Subheader');
var _components_1 = require('../_components');
var setup_1 = require('../../services/setup/setup');
exports.SetupGuide = function (_a) {
    var warning = _a.warning;
    return (React.createElement("div", {className: 'cr-setup'}, React.createElement(list_1.default, null, React.createElement(Subheader_1.default, null, "Setup"), React.createElement(list_item_1.default, {key: warning.key}, React.createElement("h4", null, warning.title), React.createElement(_components_1.MarkdownText, {text: warning.text}))), React.createElement("br", null), !!warning.button ? React.createElement("div", {class: 'cr-setup-action'}, React.createElement(raised_button_1.default, {primary: true, label: warning.button, onTouchTap: warning.click}), React.createElement("br", null), React.createElement("br", null)) : null, !!warning.verify ? React.createElement("div", {class: 'cr-setup-action'}, React.createElement(raised_button_1.default, {label: "Verify " + warning.verify, secondary: true, onTouchTap: setup_1.verifySetupComplete}), React.createElement("br", null), React.createElement("br", null)) : null));
};
