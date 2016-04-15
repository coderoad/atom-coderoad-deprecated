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
var FlatButton_1 = require('material-ui/FlatButton');
var Table_1 = require('material-ui/Table');
var react_redux_1 = require('react-redux');
var Action = require('../../actions/actions');
var file_upload_1 = require('material-ui/svg-icons/file/file-upload');
var TutorialList = (function (_super) {
    __extends(TutorialList, _super);
    function TutorialList() {
        _super.apply(this, arguments);
    }
    TutorialList.prototype.trim = function (name) {
        if (name.match(/^coderoad-tutorial-/)) {
            return name.slice(18);
        }
        if (name.match(/^coderoad-/)) {
            return name.slice(9);
        }
        return name;
    };
    TutorialList.prototype.render = function () {
        var _this = this;
        var _a = this.props, tutorials = _a.tutorials, loadTutorials = _a.loadTutorials, selectTutorial = _a.selectTutorial, toggleAlert = _a.toggleAlert, updateTutorial = _a.updateTutorial;
        return (React.createElement("div", {className: 'cr-tutorials'}, React.createElement(Table_1.Table, null, React.createElement(Table_1.TableHeader, {displaySelectAll: false, adjustForCheckbox: false}, React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableHeaderColumn, null, "Tutorial"), React.createElement(Table_1.TableHeaderColumn, null, "Version"))), React.createElement(Table_1.TableBody, {displayRowCheckbox: false}, tutorials.map(function (tutorial, index) {
            return (React.createElement(Table_1.TableRow, null, React.createElement(Table_1.TableRowColumn, null, React.createElement(FlatButton_1.default, {label: _this.trim(tutorial.name), primary: true, onTouchTap: selectTutorial.bind(_this, tutorial)})), !!tutorial.latest
                ? React.createElement(Table_1.TableRowColumn, null, tutorial.version, " ", React.createElement(file_upload_1.default, {onClick: updateTutorial(tutorial.name)}))
                : React.createElement(Table_1.TableRowColumn, null, tutorial.version)));
        }))), React.createElement("br", null), React.createElement(FlatButton_1.default, {style: { margin: '0 90px' }, label: 'Check for Tutorials', secondary: true, onTouchTap: loadTutorials})));
    };
    TutorialList = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                selectTutorial: function (tutorial) {
                    Action.loadTutorial(tutorial);
                    dispatch(Action.setRoute('progress'));
                },
                toggleAlert: function (item) {
                    dispatch(Action.toggleAlert(item));
                },
                loadTutorials: function () {
                    dispatch(Action.loadTutorials());
                },
                updateTutorial: function (name) {
                    dispatch(Action.updateTutorial(name));
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialList);
    return TutorialList;
}(React.Component));
exports.Tutorials = function (_a) {
    var tutorials = _a.tutorials;
    return (React.createElement(TutorialList, {tutorials: tutorials}));
};
