'use strict';
var React = require('react');
var _components_1 = require('../../_components');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (_a) {
    var chapter = _a.chapter;
    return (React.createElement("section", {className: 'cr-chapter'}, React.createElement(_components_1.Markdown, null, chapter.title)));
};
