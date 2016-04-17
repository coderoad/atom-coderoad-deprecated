"use strict";
var React = require('react');
var Table_1 = require('material-ui/Table');
var buttons_1 = require('./buttons');
exports.Tutorials = function (_a) {
    var tutorials = _a.tutorials;
    return (React.createElement("div", {className: 'cr-tutorials'}, React.createElement(Table_1.Table, null, React.createElement(Table_1.TableHeader, {displaySelectAll: false, adjustForCheckbox: false}, React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableHeaderColumn, null, "Tutorial"), React.createElement(Table_1.TableHeaderColumn, null, "Version"))), React.createElement(Table_1.TableBody, {displayRowCheckbox: false}, tutorials.map(function (tutorial, index) {
        return (React.createElement(Table_1.TableRow, {key: index}, React.createElement(Table_1.TableRowColumn, null, React.createElement(buttons_1.SelectTutorial, {tutorial: tutorial})), tutorial.latest
            ? React.createElement(Table_1.TableRowColumn, null, tutorial.version, " ", React.createElement(buttons_1.UpdateTutorial, {name: tutorial.name}))
            : React.createElement(Table_1.TableRowColumn, null, tutorial.version)));
    }))), React.createElement("br", null), React.createElement(buttons_1.LoadTutorials, null)));
};
