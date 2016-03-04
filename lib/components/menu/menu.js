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
var _this = this;
var React = require('react');
var react_redux_1 = require('react-redux');
var Action = require('../../actions/actions');
var render_1 = require('../render');
var subscriptions_1 = require('../../atom/subscriptions');
var material_ui_1 = require('material-ui');
var MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
var NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.navOptions = function () {
        switch (this.props.route) {
            case 'page':
                return React.createElement("button", {onTouchTap: this.props.routeToProgress}, "progress");
            case 'progress':
                return React.createElement("button", {onTouchTap: this.props.routeToPage}, "page");
            default: return null;
        }
    };
    default_1.prototype.menuOptions = function () {
        switch (this.props.route) {
            case 'page':
                return (React.createElement("div", null, React.createElement(material_ui_1.MenuItem, {primaryText: 'progress', onTouchTap: this.props.routeToProgress, key: 'progress'}), React.createElement(material_ui_1.MenuItem, {primaryText: 'projects', onTouchTap: this.props.routeToProjects, key: 'projects'})));
            case 'progress':
                return React.createElement(material_ui_1.MenuItem, {primaryText: 'projects', onTouchTap: this.props.routeToProjects, key: 'projects'});
            default: return null;
        }
    };
    default_1.prototype.closePanel = function () {
        render_1.togglePanel();
    };
    default_1.prototype.render = function () {
        return (React.createElement(material_ui_1.AppBar, {title: 'CodeRoad', className: 'cr-menu-bar', iconElementLeft: React.createElement(material_ui_1.IconButton, {onTouchTap: this.closePanel}, React.createElement(NavigationClose, null)), iconElementRight: React.createElement(material_ui_1.IconMenu, {iconButtonElement: React.createElement(material_ui_1.IconButton, null, React.createElement(MoreVertIcon, null)), targetOrigin: { horizontal: 'right', vertical: 'top' }, anchorOrigin: { horizontal: 'right', vertical: 'top' }}, this.menuOptions(), window.coderoad.issuesPath ? React.createElement(material_ui_1.MenuItem, {key: 'issue'}, React.createElement("a", {href: window.coderoad.issuesPath}, "post issue")) : null, React.createElement(material_ui_1.ListDivider, null), React.createElement(material_ui_1.MenuItem, {primaryText: 'quit', onTouchTap: this.props.quit}))}));
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
                routeToProjects: function () { return dispatch(Action.setRoute('projects')); },
                quit: function () {
                    render_1.togglePanel();
                    subscriptions_1.onDeactivateSubscriptionsAndUnmount();
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
