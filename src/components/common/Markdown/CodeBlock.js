"use strict";
var React = require('react');
var syntax_highlighter_1 = require('./syntax-highlighter');
var CodeBlock = function (_a) {
    var style = _a.style, children = _a.children, lang = _a.lang;
    return (React.createElement("pre", null, 
        React.createElement("code", {style: style ? style : null, dangerouslySetInnerHTML: { __html: syntax_highlighter_1.default(children, lang) }})
    ));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CodeBlock;
