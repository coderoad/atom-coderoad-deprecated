"use strict";
var compareVersions_1 = require('../../../utils/compareVersions');
var system_1 = require('../../../utils/system');
var atom_plugin_command_line_1 = require('atom-plugin-command-line');
var versions = {
    node: '4.0.0',
    npm: '3.0.0'
};
function minVersion(command) {
    var minVersion = versions[command];
    return new Promise(function (resolve, reject) {
        var minOrLater = atom_plugin_command_line_1.default(command, '-v')
            .then(function (res) { return compareVersions_1.isAboveVersion(res, minVersion); });
        if (!minOrLater) {
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
}
exports.minVersion = minVersion;
function hasOrDoesNotRequireXCode() {
    if (!system_1.isMac) {
        return true;
    }
    return atom_plugin_command_line_1.default('xcode-select', '-v').then(function (res) {
        if (!!res.match(/xcode-select version [0-9]+/)) {
            return true;
        }
        return false;
    });
}
exports.hasOrDoesNotRequireXCode = hasOrDoesNotRequireXCode;
//# sourceMappingURL=check-system.js.map