"use strict";
var command_line_1 = require('../../../services/command-line');
function updateNpm() {
    command_line_1.default('npm', 'update -g npm')
        .then(function (res) {
    });
}
exports.updateNpm = updateNpm;
