"use strict";
var React = require('react');
var path = require('path');
var mode_edit_1 = require('material-ui/lib/svg-icons/editor/mode-edit');
var editStyle = { position: 'absolute', top: '10px', right: '10px' };
exports.Edit = function (_a) {
    var editPath = _a.editPath;
    if (editPath && window.coderoad.edit) {
        var repoPath = path.join(window.coderoad.repo, 'edit', 'master', editPath);
        return React.createElement("a", {href: repoPath}, React.createElement(mode_edit_1.default, {style: editStyle}));
    }
};
