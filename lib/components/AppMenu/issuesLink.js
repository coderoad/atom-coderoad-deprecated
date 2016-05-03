"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
var store_1 = require('../../store');
function issuesLink() {
    var tutorial = store_1.default.getState().tutorial;
    if (!tutorial || !tutorial.config || !tutorial.config.issuesPath) {
        return null;
    }
    return (React.createElement(MenuItem_1.default, {key: 'issue', className: 'link'}, React.createElement("a", {href: tutorial.config.issuesPath}, "post issue")));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = issuesLink;
