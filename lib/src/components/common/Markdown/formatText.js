"use strict";
var marked = require('marked');
var syntax_highlighter_1 = require('./syntax-highlighter');
var options = {
    breaks: true,
    gfm: true,
    highlight: syntax_highlighter_1.default,
    tables: true,
    sanitize: true,
    smartLists: true,
};
function default_1(text) {
    return typeof text !== 'string' ? '' : marked(text.toString(), options);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
