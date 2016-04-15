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
var _this = this;
var React = require('react');
var react_redux_1 = require('react-redux');
var Action = require('../../actions/actions');
var render_1 = require('../render');
var subscriptions_1 = require('../../atom/subscriptions');
var AppBar_1 = require('material-ui/AppBar');
var IconButton_1 = require('material-ui/IconButton');
var IconMenu_1 = require('material-ui/IconMenu');
var MenuItem_1 = require('material-ui/MenuItem');
var Divider_1 = require('material-ui/Divider');
var more_vert_1 = require('material-ui/svg-icons/navigation/more-vert');
var close_1 = require('material-ui/svg-icons/navigation/close');
var origin = { horizontal: 'right', vertical: 'top' };
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.navOptions = function () {
        var _a = this.props, routeToProgress = _a.routeToProgress, routeToPage = _a.routeToPage;
        switch (this.props.route) {
            case 'final':
            case 'page':
                return React.createElement("button", {onTouchTap: routeToProgress}, "progress");
            case 'progress':
                return React.createElement("button", {onTouchTap: routeToPage}, "page");
            default: return null;
        }
    };
    default_1.prototype.menuOptions = function () {
        var _a = this.props, routeToProgress = _a.routeToProgress, routeToTutorials = _a.routeToTutorials;
        switch (this.props.route) {
            case 'final':
            case 'page':
                return (React.createElement("div", null, React.createElement(MenuItem_1.default, {primaryText: 'progress', onTouchTap: routeToProgress, key: 'progress'}), React.createElement(MenuItem_1.default, {primaryText: 'tutorials', onTouchTap: routeToTutorials, key: 'projects'})));
            case 'progress':
                return React.createElement(MenuItem_1.default, {primaryText: 'tutorials', onTouchTap: routeToTutorials, key: 'projects'});
            default: return null;
        }
    };
    default_1.prototype.closePanel = function () {
        render_1.togglePanel();
    };
    default_1.prototype.render = function () {
        var quit = this.props.quit;
        return React.createElement(AppBar_1.default, {title: 'CodeRoad', className: 'cr-menu-bar', iconElementLeft: React.createElement(IconButton_1.default, {onClick: this.closePanel}, React.createElement(close_1.default, null)), iconElementRight: React.createElement(IconMenu_1.default, {iconButtonElement: React.createElement(IconButton_1.default, null, React.createElement(more_vert_1.default, null)), targetOrigin: origin, anchorOrigin: origin}, this.menuOptions(), window.coderoad.issuesPath
            ? React.createElement(MenuItem_1.default, {key: 'issue', className: 'link'}, React.createElement("a", {href: window.coderoad.issuesPath}, "post issue"))
            : null, React.createElement(Divider_1.default, null), React.createElement(MenuItem_1.default, {key: 'quit', onClick: quit}, "quit"))});
    };
    default_1 = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                routeToProgress: function () { return dispatch(Action.setRoute('progress')); },
                routeToPage: function () {
                    var position = _this.props.position;
                    dispatch(Action.setPage(position));
                    dispatch(Action.setRoute('page'));
                },
                routeToTutorials: function () { return dispatch(Action.setRoute('tutorials')); },
                quit: function () {
                    render_1.togglePanel();
                    subscriptions_1.onDeactivate();
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
