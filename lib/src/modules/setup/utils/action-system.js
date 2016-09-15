"use strict";
var atom_plugin_command_line_1 = require('atom-plugin-command-line');
function updateNpm() {
    atom_plugin_command_line_1.default('npm', 'update -g npm')
        .then(function (res) {
    });
}
exports.updateNpm = updateNpm;
