"use strict";
var React = require('react');
var Table_1 = require('material-ui/Table');
var LoadTutorials_1 = require('./LoadTutorials');
var UpdateTutorial_1 = require('./UpdateTutorial');
var SelectTutorial_1 = require('./SelectTutorial');
var styles = {
    padding: '10px',
    textAlign: 'center',
};
exports.Tutorials = function (_a) {
    var tutorials = _a.tutorials;
    return (React.createElement("div", {style: styles}, React.createElement(Table_1.Table, null, React.createElement(Table_1.TableHeader, {displaySelectAll: false, adjustForCheckbox: false}, React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableHeaderColumn, null, "Tutorial"), React.createElement(Table_1.TableHeaderColumn, null, "Version"))), React.createElement(Table_1.TableBody, {displayRowCheckbox: false}, tutorials.map(function tutorialRow(tutorial, index) {
        return (React.createElement(Table_1.TableRow, {key: index}, React.createElement(Table_1.TableRowColumn, null, React.createElement(SelectTutorial_1.SelectTutorial, {tutorial: tutorial})), React.createElement(Table_1.TableRowColumn, null, tutorial.version, !!tutorial.latest
            ? React.createElement(UpdateTutorial_1.UpdateTutorial, {tutorial: tutorial})
            : null)));
    }))), React.createElement("br", null), React.createElement(LoadTutorials_1.LoadTutorials, null)));
};
