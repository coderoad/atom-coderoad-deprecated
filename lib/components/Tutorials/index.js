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
var Tutorials = function (_a) {
    var tutorialList = _a.tutorialList;
    return (React.createElement("div", {style: styles}, React.createElement(Table_1.Table, null, React.createElement(Table_1.TableHeader, {displaySelectAll: false, adjustForCheckbox: false}, React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableHeaderColumn, null, "Tutorial"), React.createElement(Table_1.TableHeaderColumn, null, "Version"))), React.createElement(Table_1.TableBody, {displayRowCheckbox: false}, tutorialList.map(function tutorialRow(tutorial, index) {
        return (React.createElement(Table_1.TableRow, {key: index}, React.createElement(Table_1.TableRowColumn, null, React.createElement(SelectTutorial_1.default, {tutorial: tutorial})), React.createElement(Table_1.TableRowColumn, null, tutorial.version, !!tutorial.latest
            ? React.createElement(UpdateTutorial_1.default, {tutorial: tutorial})
            : null)));
    }))), React.createElement("br", null), React.createElement(LoadTutorials_1.default, null)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tutorials;
