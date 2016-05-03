"use strict";
var React = require('react');
var InstallGuide = function (_a) {
    var show = _a.show;
    if (!show) {
        return null;
    }
    return (React.createElement("div", {className: 'setup-guide'}, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide"))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InstallGuide;
