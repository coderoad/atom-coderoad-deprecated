"use strict";
var compareVersions_1 = require("./compareVersions");
var atom_plugin_command_line_1 = require("atom-plugin-command-line");
exports.name = 'Atom';
exports.minVersion = '1.8';
exports.versionLabel = exports.name + " >= " + exports.minVersion;
exports.versionFailMessage = "\nFirst make sure you have atom shell commands installed.\nClick the atom menu and select \"Install Shell Commands\".\n\nOtherwise, update your version of Atom.\nClick on the blue \"update\" squirrel in the bottom right corner of your editor.";
function isAboveMinVersion() {
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
exports.isAboveMinVersion = isAboveMinVersion;
exports.issuesPath = 'https://github.com/coderoad/atom-coderoad/issues';
//# sourceMappingURL=setup.js.map