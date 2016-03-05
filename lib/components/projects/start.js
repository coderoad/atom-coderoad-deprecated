'use strict';
var React = require('react');
var material_ui_1 = require('material-ui');
var setup_1 = require('./setup');
var tutorials_1 = require('./tutorials');
exports.Project = function (_a) {
    var tutorials = _a.tutorials;
    return (React.createElement(material_ui_1.Paper, {className: 'cr-projects'}, React.createElement("div", {className: 'cr-projects-header'}, React.createElement("span", {className: 'title'}, "CodeRoad"), React.createElement("p", {className: 'tagline'}, "Tutorials in the Editor"), window.coderoad.dir && window.coderoad.setup.hasPackageJson && tutorials.length > 0 ?
        React.createElement(tutorials_1.default, {tutorials: tutorials}) : React.createElement(setup_1.SetupGuide, null), React.createElement("p", {className: 'notes'}, "Beta"))));
};
