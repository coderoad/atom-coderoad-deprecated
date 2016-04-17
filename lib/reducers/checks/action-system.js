"use strict";
var command_line_1 = require('../../services/command-line');
var store_1 = require('../../store/store');
var actions_1 = require('../../actions');
function updateNpm() {
    command_line_1.default('npm', 'update -g npm')
        .then(function (res) {
        store_1.store.dispatch(actions_1.setupVerify());
    });
}
exports.updateNpm = updateNpm;
