'use strict';
var path = require('path');
var Edit = require('material-ui/lib/svg-icons/editor/mode-edit');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (editPath) {
    if (editPath && global.coderoad.edit) {
        var repoPath = path.join(global.coderoad.repo, 'edit', 'master', editPath);
        return React.createElement("a", {href: repoPath}, 
            React.createElement(Edit, {style: { position: 'absolute', top: '10px', right: '10px' }})
        );
    }
};
