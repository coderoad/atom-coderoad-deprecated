"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../actions');
var FlatButton_1 = require('material-ui/FlatButton');
var SelectTutorial = (function (_super) {
    __extends(SelectTutorial, _super);
    function SelectTutorial() {
        _super.apply(this, arguments);
    }
    SelectTutorial.prototype.render = function () {
        var _a = this.props, tutorial = _a.tutorial, tutorialSet = _a.tutorialSet;
        var name = tutorial.name, version = tutorial.version;
        return (React.createElement(FlatButton_1.default, {label: this.displayName(name), primary: true, onTouchTap: tutorialSet.bind(this, { name: name, version: version })}));
    };
    SelectTutorial.prototype.displayName = function (name) {
        switch (true) {
            case !!name.match(/^coderoad-tutorial-/): return name.slice(18);
            case !!name.match(/^coderoad-/): return name.slice(9);
            default: return name;
        }
    };
    return SelectTutorial;
}(React.Component));
var mapStateToProps = function (state, props) { return ({
    tutorial: props.tutorial
}); };
var mapDispatchToProps = { tutorialSet: actions_1.tutorialSet };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SelectTutorial);
//# sourceMappingURL=index.js.map