"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var InstallGuide = (function (_super) {
    __extends(InstallGuide, _super);
    function InstallGuide() {
        _super.apply(this, arguments);
    }
    InstallGuide.prototype.render = function () {
        var checks = this.props.checks;
        if (!checks || !checks.passed) {
            return null;
        }
        return (React.createElement("div", {className: 'setup-guide'}, 
            "Check the", 
            React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, 
                " ", 
                React.createElement("strong", null, "Install Guide"))));
    };
    return InstallGuide;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InstallGuide;
//# sourceMappingURL=InstallGuide.js.map