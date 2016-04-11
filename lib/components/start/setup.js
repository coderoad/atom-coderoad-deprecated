"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var list_1 = require('material-ui/lib/lists/list');
var list_item_1 = require('material-ui/lib/lists/list-item');
var raised_button_1 = require('material-ui/lib/raised-button');
var Subheader_1 = require('material-ui/lib/Subheader');
var _components_1 = require('../_components');
var setup_1 = require('../../services/setup/setup');
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.render = function () {
        var warning = this.props.warning;
        return (React.createElement("div", {className: 'cr-setup'}, React.createElement(list_1.default, null, React.createElement(Subheader_1.default, null, "Setup"), React.createElement(list_item_1.default, {key: warning.key}, React.createElement("h4", null, warning.title), React.createElement(_components_1.MarkdownText, {text: warning.text}))), React.createElement("br", null), !!warning.button ? React.createElement("div", {class: 'cr-setup-action'}, React.createElement(raised_button_1.default, {primary: true, label: warning.button, onTouchTap: warning.click}), React.createElement("br", null), React.createElement("br", null)) : null, !!warning.verify ? React.createElement("div", {class: 'cr-setup-action'}, React.createElement(raised_button_1.default, {label: "Verify " + warning.verify, secondary: true, onTouchTap: setup_1.verifySetupComplete}), React.createElement("br", null), React.createElement("br", null)) : null, React.createElement("div", {className: 'setup-guide'}, React.createElement("span", null, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide"))))));
    };
    ;
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
