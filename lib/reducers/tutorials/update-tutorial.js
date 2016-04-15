"use strict";
var command_line_1 = require('../../services/command-line');
var store_1 = require('../../store/store');
var actions_1 = require('../../actions/actions');
function canUpdateTutorial(name, currentVersion) {
    return (command_line_1.default('npm', "outdated " + name)
        .then(function (res) {
        if (res.length > 0) {
            var match = res.match(/[0-9\.]+\s+[0-9\.]+\s+([0-9\.]+)/);
            if (match.length >= 2) {
                return match[1];
            }
        }
        return null;
    }));
}
exports.canUpdateTutorial = canUpdateTutorial;
function updateTutorial(name) {
    command_line_1.default('npm', "install --save-dev " + name)
        .then(function () {
        store_1.store.dispatch(actions_1.loadTutorials());
    });
}
exports.updateTutorial = updateTutorial;
