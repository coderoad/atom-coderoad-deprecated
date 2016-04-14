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
var flat_button_1 = require('material-ui/lib/flat-button');
var table_1 = require('material-ui/lib/table/table');
var table_header_column_1 = require('material-ui/lib/table/table-header-column');
var table_row_1 = require('material-ui/lib/table/table-row');
var table_header_1 = require('material-ui/lib/table/table-header');
var table_row_column_1 = require('material-ui/lib/table/table-row-column');
var table_body_1 = require('material-ui/lib/table/table-body');
var file_upload_1 = require('material-ui/lib/svg-icons/file/file-upload');
var react_redux_1 = require('react-redux');
var Action = require('../../actions/actions');
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
        return (React.createElement("div", {className: 'cr-tutorials'}, React.createElement(table_1.default, null, React.createElement(table_header_1.default, {displaySelectAll: false, adjustForCheckbox: false}, React.createElement(table_row_1.default, null, React.createElement(table_header_column_1.default, null, "Tutorial"), React.createElement(table_header_column_1.default, null, "Version"))), React.createElement(table_body_1.default, {displayRowCheckbox: false}, tutorials.map(function (tutorial, index) {
            return (React.createElement(table_row_1.default, null, React.createElement(table_row_column_1.default, null, React.createElement(flat_button_1.default, {label: _this.trim(tutorial.name), primary: true, onTouchTap: selectTutorial.bind(_this, tutorial)})), !!tutorial.latest
                ? React.createElement(table_row_column_1.default, null, tutorial.version, " ", React.createElement(file_upload_1.default, {onClick: updateTutorial(tutorial.name)}))
                : React.createElement(table_row_column_1.default, null, tutorial.version)));
        }))), React.createElement("br", null), React.createElement(flat_button_1.default, {style: { margin: '0 95px' }, label: 'Check for Tutorials', secondary: true, onTouchTap: loadTutorials})));
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
