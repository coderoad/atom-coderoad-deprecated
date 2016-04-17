"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
var _components_1 = require('../_components');
var Routes = (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        _super.apply(this, arguments);
    }
    Routes.prototype.render = function () {
        switch (this.props.route) {
            case 'page':
                return React.createElement(_components_1.Page, __assign({}, this.props));
            case 'progress':
                return React.createElement(_components_1.Progress, __assign({}, this.props));
            case 'start':
                return React.createElement(_components_1.Start, __assign({}, this.props));
            case 'tutorials':
                return React.createElement(_components_1.Tutorials, __assign({}, this.props));
            case 'final':
                return React.createElement(_components_1.FinalPage, null);
            default:
                throw 'Error: Route not found.';
        }
    };
    return Routes;
}(React.Component));
exports.Routes = Routes;
