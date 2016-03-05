"use strict";
var _this = this;
var React = require('react');
var material_ui_1 = require('material-ui');
var _components_1 = require('../_components');
var start_1 = require('../../services/start');
var editor_1 = require('../../atom/editor');
exports.SetupGuide = function () {
    var warnings = [];
    if (!window.coderoad.dir) {
        warnings.push({
            key: 'noProject',
            title: 'Create an Atom Project',
            click: editor_1.openFolder,
            text: 'File > Open > a workspace folder'
        });
    }
    if (!window.coderoad.setup.hasPackageJson) {
        warnings.push({
            key: 'noPackageJson',
            title: 'Create a `package.json` file',
            click: start_1.createPackageJson,
            text: '`npm init`'
        });
    }
    if (_this.props.tutorials.length < 1) {
        warnings.push({
            key: 'noTutorial',
            title: 'Install a Tutorial',
            click: null,
            text: '`npm i --save coderoad-functional-school`'
        });
    }
    return (React.createElement("div", {className: 'setup'}, React.createElement(material_ui_1.List, {subheader: 'Setup'}, warnings.map(function (w) { return React.createElement(material_ui_1.ListItem, {key: w.key, primaryText: w.title, onClick: w.click}, React.createElement(_components_1.MarkdownText, {text: w.text})); }))));
};
