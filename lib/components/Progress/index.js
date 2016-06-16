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
var Paper_1 = require('material-ui/Paper');
var List_1 = require('material-ui/List');
var Subheader_1 = require('material-ui/Subheader');
var ProgressPage_1 = require('./ProgressPage');
var actions_1 = require('../../modules/progress/actions');
var styles = {
    page: {
        width: '100%',
    },
    list: {
        margin: '5px',
    },
};
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        _super.apply(this, arguments);
    }
    Progress.prototype.componentWillMount = function () {
        this.props.progressLoad();
    };
    Progress.prototype.render = function () {
        var _a = this.props, progress = _a.progress, pagePosition = _a.pagePosition, info = _a.info, tutorial = _a.tutorial;
        return (React.createElement(Paper_1.default, {style: styles.page}, 
            React.createElement(List_1.List, {style: styles.list}, 
                React.createElement(Subheader_1.default, null, info.title), 
                tutorial.pages.map(function (page, index) { return (React.createElement(ProgressPage_1.default, {key: index, index: index, page: page, pagePosition: pagePosition, progress: progress})); }))
        ));
    };
    Progress = __decorate([
        react_redux_1.connect(function (state) { return ({
            progress: state.progress,
            pagePosition: state.pagePosition,
            info: state.tutorial.info,
            tutorial: state.tutorial
        }); }, { progressLoad: actions_1.progressLoad }), 
        __metadata('design:paramtypes', [])
    ], Progress);
    return Progress;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Progress;
