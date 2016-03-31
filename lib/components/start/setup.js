"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var material_ui_1 = require('material-ui');
var _components_1 = require('../_components');
var setup_checks_1 = require('../../services/setup-checks');
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.render = function () {
        var warning = this.props.warning;
        return (React.createElement("div", {className: 'cr-setup'}, React.createElement(material_ui_1.List, {subheader: 'Setup'}, React.createElement(material_ui_1.ListItem, {key: warning.key}, React.createElement("h4", null, warning.title), React.createElement(_components_1.MarkdownText, {text: warning.text}))), React.createElement("br", null), !!warning.button ? React.createElement("div", {class: 'cr-setup-action'}, React.createElement(material_ui_1.RaisedButton, {primary: true, label: warning.button, onTouchTap: warning.click}), React.createElement("br", null), React.createElement("br", null)) : null, !!warning.verify ? React.createElement("div", {class: 'cr-setup-action'}, React.createElement(material_ui_1.RaisedButton, {label: "Verify " + warning.verify, secondary: true, onTouchTap: setup_checks_1.verifySetupComplete}), React.createElement("br", null), React.createElement("br", null)) : null, React.createElement("div", {className: 'setup-guide'}, React.createElement("span", null, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide"))))));
    };
    ;
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
