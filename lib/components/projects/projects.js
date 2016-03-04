'use strict';
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
var Action = require('../../actions/actions');
var material_ui_1 = require('material-ui');
var Projects = (function (_super) {
    __extends(Projects, _super);
    function Projects() {
        _super.apply(this, arguments);
    }
    Projects.prototype.load = function () {
        this.props.loadTutorials();
    };
    Projects.prototype.trim = function (name) {
        if (name.match(/^coderoad-tutorial-/)) {
            return name.slice(18);
        }
        if (name.match(/^coderoad-/)) {
            return name.slice(9);
        }
        return name;
    };
    Projects.prototype.render = function () {
        var _this = this;
        return (React.createElement(material_ui_1.Paper, {className: 'cr-projects'}, 
            React.createElement("div", {className: 'cr-projects-header'}, 
                React.createElement("span", {className: 'title'}, "CodeRoad"), 
                React.createElement("p", {className: 'tagline'}, "Tutorials in the Editor"), 
                React.createElement("div", {className: 'cr-tutorials'}, 
                    React.createElement(material_ui_1.List, {subheader: 'Tutorials'}, 
                        window.coderoad.dir ? null : React.createElement(material_ui_1.ListItem, {primaryText: 'Create an Atom Project', secondaryText: 'File > Open > any older'}), 
                        this.props.tutorials.length > 0 ?
                            this.props.tutorials.map(function (tutorial) {
                                return (React.createElement(material_ui_1.ListItem, {primaryText: _this.trim(tutorial), onClick: _this.props.selectProject.bind(_this, tutorial)}));
                            }) : React.createElement(material_ui_1.ListItem, {primaryText: 'Try a Demo', secondaryText: 'npm i -s coderoad-functional-school'})), 
                    React.createElement("br", null), 
                    React.createElement(material_ui_1.RaisedButton, {label: 'Load Tutorials', secondary: true, onClick: this.load.bind(this)})), 
                React.createElement("p", {className: 'notes'}, "Beta"))
        ));
    };
    Projects = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                selectProject: function (name) {
                    Action.loadTutorial(name);
                    dispatch(Action.setRoute('progress'));
                },
                toggleAlert: function (item) {
                    dispatch(Action.toggleAlert(item));
                },
                loadTutorials: function () {
                    dispatch(Action.loadTutorials());
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], Projects);
    return Projects;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Projects;
;
