"use strict";
var React = require('react');
var formatText_1 = require('./formatText');
var Markdown = function (_a) {
    var style = _a.style, children = _a.children;
    return (React.createElement("span", {className: 'cr-markdown', style: style ? style : null, dangerouslySetInnerHTML: { __html: formatText_1.default(children) }}));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Markdown;
