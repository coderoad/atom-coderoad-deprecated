"use strict";
var command_line_1 = require('../../services/command-line');
var store_1 = require('../../store/store');
var Action = require('../../actions/actions');
function updateNpm() {
    command_line_1.default('npm', 'update -g npm')
        .then(function (res) {
        console.log(res);
        store_1.store.dispatch(Action.verifySetup());
    });
}
exports.updateNpm = updateNpm;
