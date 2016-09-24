"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var RaisedButton_1 = require('material-ui/RaisedButton');
var RouteButton = (function (_super) {
    __extends(RouteButton, _super);
    function RouteButton() {
        _super.apply(this, arguments);
    }
    RouteButton.prototype.render = function () {
        var _a = this.props, label = _a.label, route = _a.route, style = _a.style, routeSet = _a.routeSet;
        return (React.createElement(RaisedButton_1.default, {label: label, style: style || {}, onTouchTap: routeSet.bind(this, route), secondary: true}));
    };
    return RouteButton;
}(React.Component));
var mapStateToProps = function (state, props) { return ({
    label: props.label,
    route: props.route,
    style: props.style || {}
}); };
var mapDispatchToProps = { routeSet: actions_1.routeSet };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RouteButton);
//# sourceMappingURL=RouteButton.js.map