"use strict";
var React = require('react');
var marked = require('marked');
var Highlights = require('highlights');
var highlighter = new Highlights({ registry: atom.grammars });
function highlight(code, lang) {
    return highlighter.highlightSync({
        fileContents: code,
        scopeName: 'source.' + (lang || 'js')
    });
}
var options = {
    breaks: true,
    gfm: true,
    highlight: highlight,
    tables: true,
    sanitize: true,
    smartLists: true,
};
function formatText(text) {
    return typeof text !== 'string'
        ? ''
        : marked(text.toString(), options);
}
;
var Markdown = function (_a) {
    var style = _a.style, children = _a.children;
    return (React.createElement("span", {className: 'cr-markdown', style: style ? style : null, dangerouslySetInnerHTML: { __html: formatText(children) }}));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Markdown;
