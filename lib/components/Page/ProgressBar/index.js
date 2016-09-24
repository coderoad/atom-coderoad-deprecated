"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var LinearProgress_1 = require('material-ui/LinearProgress');
var style = {
    height: '10px',
    position: 'relative',
    margin: '0px',
};
var ProgressBar = (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        _super.apply(this, arguments);
    }
    ProgressBar.prototype.render = function () {
        var taskProgress = this.props.taskProgress;
        return (React.createElement(LinearProgress_1.default, {mode: 'determinate', value: taskProgress, style: style}));
    };
    return ProgressBar;
}(React.Component));
var mapStateToProps = function (state) { return ({
    taskProgress: (state.taskPosition / state.tutorial.pages[state.pagePosition].tasks.length) * 100
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(ProgressBar);
//# sourceMappingURL=index.js.map