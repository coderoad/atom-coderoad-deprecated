"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var LoadTutorials_1 = require('./LoadTutorials');
var SelectTutorial_1 = require('./SelectTutorial');
var UpdateTutorial_1 = require('./UpdateTutorial');
var Table_1 = require('material-ui/Table');
var styles = {
    padding: '10px',
    textAlign: 'center',
};
var Tutorials = (function (_super) {
    __extends(Tutorials, _super);
    function Tutorials(props) {
        _super.call(this, props);
    }
    Tutorials.prototype.render = function () {
        var tutorials = this.props.tutorials;
        return (React.createElement("div", {style: styles}, 
            React.createElement(Table_1.Table, null, 
                React.createElement(Table_1.TableHeader, {displaySelectAll: false, adjustForCheckbox: false}, 
                    React.createElement(Table_1.TableRow, null, 
                        React.createElement(Table_1.TableHeaderColumn, null, "Tutorial"), 
                        React.createElement(Table_1.TableHeaderColumn, null, "Version"))
                ), 
                React.createElement(Table_1.TableBody, {displayRowCheckbox: false}, tutorials.map(function tutorialRow(tutorial, index) {
                    return (React.createElement(Table_1.TableRow, {key: index}, 
                        React.createElement(Table_1.TableRowColumn, null, 
                            React.createElement(SelectTutorial_1.default, {tutorial: tutorial})
                        ), 
                        React.createElement(Table_1.TableRowColumn, null, 
                            tutorial.version, 
                            !tutorial.isLatest
                                ? React.createElement(UpdateTutorial_1.default, {tutorial: tutorial})
                                : null)));
                }))), 
            React.createElement("br", null), 
            React.createElement(LoadTutorials_1.default, null)));
    };
    Tutorials.prototype.componentDidMount = function () {
        this.props.tutorialsFind();
    };
    return Tutorials;
}(React.Component));
var mapStateToProps = function (state) { return ({
    tutorials: state.tutorials,
}); };
var mapDispatchToProps = { tutorialsFind: actions_1.tutorialsFind };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Tutorials);
//# sourceMappingURL=index.js.map