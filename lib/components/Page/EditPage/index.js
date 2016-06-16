"use strict";
var React = require('react');
var path_1 = require('path');
var mode_edit_1 = require('material-ui/svg-icons/editor/mode-edit');
var editStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
};
var EditPage = function (_a) {
    var tutorial = _a.tutorial;
    if (tutorial && tutorial.edit && tutorial.repo) {
        var repoPath = path_1.join(tutorial.repo, 'edit', 'master', tutorial.repo);
        return (React.createElement("a", {href: repoPath}, 
            React.createElement(mode_edit_1.default, {style: editStyle})
        ));
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditPage;
