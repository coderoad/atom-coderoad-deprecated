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
var FlatButton_1 = require('material-ui/FlatButton');
var actions_1 = require('../../actions');
var file_upload_1 = require('material-ui/svg-icons/file/file-upload');
var tutorial_package_1 = require('../../services/tutorial-package');
var LoadTutorials = (function (_super) {
    __extends(LoadTutorials, _super);
    function LoadTutorials() {
        _super.apply(this, arguments);
    }
    LoadTutorials.prototype.render = function () {
        return React.createElement(FlatButton_1.default, {style: { margin: '0 90px' }, label: 'Check for Tutorials', secondary: true, onTouchTap: this.props.tutorialsFind});
    };
    LoadTutorials = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                tutorialsFind: function () {
                    dispatch(actions_1.tutorialsFind());
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], LoadTutorials);
    return LoadTutorials;
}(React.Component));
exports.LoadTutorials = LoadTutorials;
var UpdateTutorial = (function (_super) {
    __extends(UpdateTutorial, _super);
    function UpdateTutorial() {
        _super.apply(this, arguments);
    }
    UpdateTutorial.prototype.render = function () {
        var _a = this.props, name = _a.name, tutorialUpdate = _a.tutorialUpdate;
        return React.createElement(file_upload_1.default, {onClick: tutorialUpdate(name)});
    };
    UpdateTutorial = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                tutorialUpdate: function (name) {
                    dispatch(actions_1.tutorialUpdate(name));
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], UpdateTutorial);
    return UpdateTutorial;
}(React.Component));
exports.UpdateTutorial = UpdateTutorial;
var SelectTutorial = (function (_super) {
    __extends(SelectTutorial, _super);
    function SelectTutorial() {
        _super.apply(this, arguments);
    }
    SelectTutorial.prototype.render = function () {
        var _a = this.props, tutorial = _a.tutorial, selectTutorial = _a.selectTutorial;
        var name = tutorial.name;
        if (name.match(/^coderoad-tutorial-/)) {
            name = name.slice(18);
        }
        if (name.match(/^coderoad-/)) {
            name = name.slice(9);
        }
        return React.createElement(FlatButton_1.default, {label: name, primary: true, onTouchTap: selectTutorial.bind(this, tutorial)});
    };
    SelectTutorial = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                selectTutorial: function (tutorial) {
                    tutorial_package_1.default.set(tutorial.name);
                    dispatch(actions_1.tutorialSet());
                    dispatch(actions_1.positionSet({ chapter: 0, page: 0 }));
                    dispatch(actions_1.setRoute('progress'));
                },
            };
        }), 
        __metadata('design:paramtypes', [])
    ], SelectTutorial);
    return SelectTutorial;
}(React.Component));
exports.SelectTutorial = SelectTutorial;
