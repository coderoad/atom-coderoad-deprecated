"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../actions');
var MenuItem_1 = require('material-ui/MenuItem');
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
        var _a = this.props, route = _a.route, title = _a.title, routeSet = _a.routeSet;
        return (React.createElement(MenuItem_1.default, {style: styles, primaryText: title ? title : route, onTouchTap: routeSet.bind(this, route), key: route}));
    };
    return MenuLink;
}(React.Component));
var mapStateToProps = function (state, props) { return ({
    route: props.route,
    title: props.title || null,
}); };
var mapDispatchToProps = { routeSet: actions_1.routeSet };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MenuLink);
//# sourceMappingURL=index.js.map