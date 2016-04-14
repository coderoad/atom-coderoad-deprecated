"use strict";
var command_line_1 = require('../../services/command-line');
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
