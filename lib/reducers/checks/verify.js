"use strict";
var check_system_1 = require('./check-system');
var store_1 = require('../../store');
var check_1 = require('../tutorial-list/check');
var result = function (x) { return x; };
function allTrue(obj) {
    return Object.values(obj).every(function (x) { return x === true; });
}
function setupVerify() {
    var dir = !!store_1.default.getState().dir;
    var packageJson = false;
    var tutorial = false;
    var pj = store_1.default.getState().packageJson;
    if (dir) {
        packageJson = !!pj;
    }
    if (dir && packageJson) {
        tutorial = !!check_1.searchForTutorials(pj.dependencies).length || !!check_1.searchForTutorials(pj.devDependencies).length;
    }
    var checks = {
        system: {
            node: !!check_system_1.nodeMinVersion(),
            npm: !!check_system_1.npmMinVersion(),
        },
        setup: {
            dir: dir,
            packageJson: packageJson,
            tutorial: tutorial,
        }
    };
    checks.system.passed = allTrue(checks.system);
    checks.setup.passed = allTrue(checks.setup);
    checks.passed = checks.system.passed && checks.setup.passed;
    return checks;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupVerify;
