"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var Table_1 = require('material-ui/Table');
var LoadTutorials_1 = require('./LoadTutorials');
var UpdateTutorial_1 = require('./UpdateTutorial');
var SelectTutorial_1 = require('./SelectTutorial');
var actions_1 = require('../../actions');
var styles = {
    padding: '10px',
    textAlign: 'center',
};
var Tutorials = (function (_super) {
    __extends(Tutorials, _super);
    function Tutorials(props) {
        _super.call(this, props);
    }
    Tutorials.prototype.componentDidMount = function () {
        this.props.loadTutorials();
    };
    Tutorials.prototype.render = function () {
        var tutorials = this.props.tutorials;
        return (React.createElement("div", {style: styles}, React.createElement(Table_1.Table, null, React.createElement(Table_1.TableHeader, {displaySelectAll: false, adjustForCheckbox: false}, React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableHeaderColumn, null, "Tutorial"), React.createElement(Table_1.TableHeaderColumn, null, "Version"))), React.createElement(Table_1.TableBody, {displayRowCheckbox: false}, tutorials.map(function tutorialRow(tutorial, index) {
            return (React.createElement(Table_1.TableRow, {key: index}, React.createElement(Table_1.TableRowColumn, null, React.createElement(SelectTutorial_1.default, {tutorial: tutorial})), React.createElement(Table_1.TableRowColumn, null, tutorial.version, !!tutorial.latest
                ? React.createElement(UpdateTutorial_1.default, {tutorial: tutorial})
                : null)));
        }))), React.createElement("br", null), React.createElement(LoadTutorials_1.default, null)));
    };
    Tutorials = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                loadTutorials: function () { return dispatch(actions_1.tutorialsFind()); }
            };
        }), 
        __metadata('design:paramtypes', [Object])
    ], Tutorials);
    return Tutorials;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tutorials;
