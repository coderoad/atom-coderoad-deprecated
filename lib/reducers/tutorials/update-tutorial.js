"use strict";
var command_line_1 = require('../../services/command-line');
var store_1 = require('../../store/store');
var actions_1 = require('../../actions');
function tutorialUpdate(name) {
    command_line_1.default('npm', "install --save-dev " + name)
        .then(function () {
        store_1.store.dispatch(actions_1.tutorialsFind());
    });
}
exports.tutorialUpdate = tutorialUpdate;
