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
var MenuItem_1 = require('material-ui/MenuItem');
var actions_1 = require('../../../actions');
var styles = {
    textAlign: 'center',
    padding: '0px 2px',
};
var MenuLink = (function (_super) {
    __extends(MenuLink, _super);
    function MenuLink() {
        _super.apply(this, arguments);
    }
    MenuLink.prototype.render = function () {
        var _a = this.props, route = _a.route, title = _a.title, routeTo = _a.routeTo;
        return (React.createElement(MenuItem_1.default, {style: styles, primaryText: title ? title : route, onTouchTap: routeTo.bind(this, route), key: route}));
    };
    MenuLink = __decorate([
        react_redux_1.connect(null, function (dispatch) { return ({
            routeTo: function (route) { dispatch(actions_1.routeSet(route)); },
        }); }), 
        __metadata('design:paramtypes', [])
    ], MenuLink);
    return MenuLink;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuLink;
