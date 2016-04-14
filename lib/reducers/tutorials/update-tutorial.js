"use strict";
var command_line_1 = require('../../services/command-line');
var store_1 = require('../../store/store');
var Action = require('../../actions/actions');
function canUpdateTutorial(name, currentVersion) {
    var isLatest = command_line_1.default('npm', "outdated " + name)
        .then(function (res) {
        if (res.length > 0) {
            return res.match(/[0-9\.]+\s+[0-9\.]+\s+([0-9\.]+)/)[1];
        }
        else {
            return null;
        }
    });
}
exports.canUpdateTutorial = canUpdateTutorial;
function updateTutorial(name) {
    command_line_1.default('npm', "install --save-dev " + name)
        .then(function () {
        store_1.store.dispatch(Action.loadTutorials());
    });
}
exports.updateTutorial = updateTutorial;
