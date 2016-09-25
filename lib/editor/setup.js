"use strict";
var React = require('react');
var compareVersions_1 = require('./compareVersions');
var atom_plugin_command_line_1 = require('atom-plugin-command-line');
exports.editorName = 'Atom';
exports.minVersion = '1.8';
exports.editorVersionLabel = exports.editorName + " >= " + exports.minVersion;
exports.editorVersionFailMessage = (React.createElement("div", null, 
    React.createElement("p", null, "First make sure you have atom shell commands installed." + ' ' + "Click the atom menu and select \"Install Shell Commands\"."), 
    React.createElement("p", null, 
        "Otherwise, update your version of Atom.", 
        React.createElement("br", null), 
        "Click on the blue \"update\" squirrel in the bottom right corner of your editor.")));
function editorMinVersion() {
    return new Promise(function (resolve, reject) {
        var minOrLater = atom_plugin_command_line_1.default('atom', '-v').then(function (res) {
            var match = res.match(/Atom\s+:\s+([0-9]\.[0-9]\.[0-9])/);
            if (match && match[1] && compareVersions_1.isAboveVersion(match[1], exports.minVersion)) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.editorMinVersion = editorMinVersion;
exports.editorIssuesPath = 'https://github.com/coderoad/atom-coderoad/issues';
//# sourceMappingURL=setup.js.map