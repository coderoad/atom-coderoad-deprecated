"use strict";
var React = require('react');
var material_ui_1 = require('material-ui');
var _components_1 = require('../_components');
var exists_1 = require('../../services/exists');
var path = require('path');
var editor_1 = require('../../atom/editor');
exports.SetupGuide = function (_a) {
    var tutorials = _a.tutorials;
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
            click: createPackageJson,
            text: '`npm init`'
        });
    }
    if (tutorials.length < 1) {
        warnings.push({
            key: 'noTutorial',
            title: 'Install a Tutorial',
            click: null,
            text: '`npm i --save coderoad-functional-school`'
        });
    }
    return (React.createElement("div", {className: 'setup'}, React.createElement(material_ui_1.List, {subheader: 'Setup'}, warnings.map(function (w) { return React.createElement(material_ui_1.ListItem, {key: w.key, primaryText: w.title, onClick: w.click}, React.createElement(_components_1.MarkdownText, {text: w.text})); })), React.createElement("br", null), React.createElement(material_ui_1.RaisedButton, {label: 'Verify Setup', secondary: true, onTouchTap: checkSetup})));
};
var packageData = "{\n  \"name\": \"demo\",\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^0.1.9\"\n  }\n}";
function createPackageJson() {
    var packagePath = path.join(window.coderoad.dir, 'package.json');
    return new Promise(function (resolve, reject) {
        editor_1.open(packagePath);
        setTimeout(function () {
            resolve();
        });
    }).then(function () {
        editor_1.set(packageData);
        window.coderoad.setup.hasPackageJson = true;
    });
}
function checkSetup() {
    var packagePath = path.join(window.coderoad.dir, 'package.json');
    if (exists_1.fileExists(packagePath)) {
        window.coderoad.setup.hasPackageJson = true;
    }
}
