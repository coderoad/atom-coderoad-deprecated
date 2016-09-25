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
;
var styles = {
    menuItem: {
        textAlign: 'center',
        padding: '0px 2px',
    },
};
var Quit = (function (_super) {
    __extends(Quit, _super);
    function Quit() {
        _super.apply(this, arguments);
    }
    Quit.prototype.render = function () {
        return (React.createElement(MenuItem_1.default, {style: styles.menuItem, key: 'quit', onClick: this.props.quit}, "quit"));
    };
    return Quit;
}(React.Component));
var mapDispatchToProps = { quit: actions_1.quit };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(Quit);
//# sourceMappingURL=index.js.map