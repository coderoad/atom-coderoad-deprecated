"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var Checks_1 = require('./Checks');
var Welcome_1 = require('./Welcome');
var headerStyles = {
    display: 'block',
    height: '100%',
    textAlign: 'center',
    color: '#f8f8f8',
};
var Start = (function (_super) {
    __extends(Start, _super);
    function Start() {
        _super.apply(this, arguments);
    }
    Start.prototype.render = function () {
        var ready = this.props.ready;
        return (React.createElement("section", {className: 'cr-start'}, 
            React.createElement("div", {style: headerStyles}, ready
                ? React.createElement(Welcome_1.default, {title: 'CodeRoad', tagline: 'Tutorials in your Editor', firstRoute: 'tutorials'})
                : React.createElement(Checks_1.default, null))
        ));
    };
    return Start;
}(React.Component));
var mapStateToProps = function (state) { return ({
    ready: state.checks.passed,
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Start);
//# sourceMappingURL=index.js.map