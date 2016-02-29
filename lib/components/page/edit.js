'use strict';
var React = require('react');
var path = require('path');
var Edit = require('material-ui/lib/svg-icons/editor/mode-edit');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (editPath) {
    if (editPath && window.coderoad.edit) {
        var repoPath = path.join(window.coderoad.repo, 'edit', 'master', editPath);
        return React.createElement("a", {href: repoPath}, React.createElement(Edit, {style: { position: 'absolute', top: '10px', right: '10px' }}));
    }
};
