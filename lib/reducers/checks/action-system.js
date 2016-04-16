"use strict";
var command_line_1 = require('../../services/command-line');
var store_1 = require('../../store/store');
var _actions_1 = require('../../actions/_actions');
function updateNpm() {
    command_line_1.default('npm', 'update -g npm')
        .then(function (res) {
        store_1.store.dispatch(_actions_1.setupVerify());
    });
}
exports.updateNpm = updateNpm;
