"use strict";
var check_system_1 = require('./check-system');
var root_package_1 = require('../../services/root-package');
var result = function (x) { return x; };
function allTrue(obj) {
    return Object.values(obj).every(function (x) { return x === true; });
}
function hasTutorialDep() {
    var tutorials = root_package_1.default.getTutorials();
    return !!tutorials && tutorials.length > 0;
}
function verifySetup() {
    var dir = !!window.coderoad.dir;
    var packageJson = false;
    var tutorial = false;
    root_package_1.default.set();
    if (dir) {
        packageJson = !!root_package_1.default.get();
    }
    if (dir && packageJson) {
        tutorial = hasTutorialDep();
    }
    var checks = {
        system: {
            node: !!check_system_1.nodeMinVersion(),
            npm: !!check_system_1.npmMinVersion()
        },
        setup: {
            dir: dir, packageJson: packageJson, tutorial: tutorial
        }
    };
    checks.system.passed = allTrue(checks.system);
    checks.setup.passed = allTrue(checks.setup);
    checks.passed = checks.system.passed && checks.setup.passed;
    return checks;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verifySetup;
