"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
function issuesLink() {
    if (!window.coderoad.issuesPath) {
        return null;
    }
    return (React.createElement(MenuItem_1.default, {key: 'issue', className: 'link'}, React.createElement("a", {href: window.coderoad.issuesPath}, "post issue")));
}
exports.issuesLink = issuesLink;
