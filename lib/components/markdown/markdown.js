"use strict";
var React = require('react');
var marked = require('marked');
var Highlights = require('highlights');
var highlighter = new Highlights({ registry: atom.grammars });
var options = {
    highlight: function (code, lang) {
        return highlighter.highlightSync({
            fileContents: code,
            scopeName: 'source.' + (lang || 'js')
        });
    },
    sanitize: true,
    gfm: true,
    breaks: true,
    tables: true,
    smartLists: true
};
function formatText(text) {
    if (typeof text !== 'string') {
        return '';
    }
    return marked(text.toString(), options);
}
;
exports.Markdown = function (_a) {
    var children = _a.children;
    var text = formatText(children);
    return React.createElement("span", {className: 'cr-markdown', dangerouslySetInnerHTML: { __html: text }});
};
