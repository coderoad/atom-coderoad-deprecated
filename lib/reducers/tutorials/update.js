"use strict";
var command_line_1 = require('../../services/command-line');
var store_1 = require('../../store');
var actions_1 = require('../../actions');
function tutorialUpdate(name) {
    command_line_1.default('npm', "install --save-dev " + name)
        .then(function () {
        store_1.default.dispatch(actions_1.tutorialsFind());
    });
}
exports.tutorialUpdate = tutorialUpdate;
function canUpdateTutorial(name, currentVersion) {
    if (!navigator.onLine) {
        return false;
    }
    return (command_line_1.default('npm', "outdated " + name).then(function (res) {
        console.log(res);
        if (res.length > 0) {
            var linked = res.match(/[0-9\.]+\s+linked/);
            if (linked) {
                return false;
            }
            var match = res.match(/[0-9\.]+\s+[0-9\.]+\s+([0-9\.]+)/);
            if (match.length >= 2) {
                return true;
            }
        }
        return false;
    }));
}
exports.canUpdateTutorial = canUpdateTutorial;
