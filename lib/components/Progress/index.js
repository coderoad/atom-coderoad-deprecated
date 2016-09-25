"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var ProgressPage_1 = require('./ProgressPage');
var List_1 = require('material-ui/List');
var Paper_1 = require('material-ui/Paper');
var RaisedButton_1 = require('material-ui/RaisedButton');
var Subheader_1 = require('material-ui/Subheader');
;
var styles = {
    page: {
        width: '100%',
    },
    list: {
        margin: '5px',
    },
    options: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        opacity: 0.6,
    },
};
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        _super.apply(this, arguments);
    }
    Progress.prototype.verifyReset = function () {
        var reset = confirm('Are you sure you want to erase your progress?');
        if (reset) {
            this.props.progressReset();
        }
    };
    Progress.prototype.render = function () {
        var _a = this.props, info = _a.info, tutorial = _a.tutorial;
        return (React.createElement("div", null, 
            React.createElement(Paper_1.default, {style: styles.page}, 
                React.createElement(List_1.List, {style: styles.list}, 
                    React.createElement(Subheader_1.default, null, info.title), 
                    tutorial.pages.map(function (page, index) { return (React.createElement(ProgressPage_1.default, {key: index, index: index, page: page})); }))
            ), 
            React.createElement("div", {style: styles.options}, 
                React.createElement(RaisedButton_1.default, {label: "Reset", onClick: this.verifyReset.bind(this)})
            )));
    };
    Progress.prototype.componentWillMount = function () {
        this.props.progressLoad();
    };
    return Progress;
}(React.Component));
var mapStateToProps = function (state) { return ({
    info: state.tutorial.info,
    tutorial: state.tutorial,
}); };
var mapDispatchToProps = {
    progressLoad: actions_1.progressLoad,
    progressReset: actions_1.progressReset
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Progress);
//# sourceMappingURL=index.js.map