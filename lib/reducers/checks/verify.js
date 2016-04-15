"use strict";
var check_system_1 = require('./check-system');
var check_setup_1 = require('./check-setup');
var result = function (x) { return x; };
function allTrue(obj) {
    return Object.values(obj).every(function (x) { return x === true; });
}
function verifySetup() {
    var dir = !!check_setup_1.hasDirectory();
    var packageJson = false;
    var tutorial = false;
    if (dir) {
        packageJson = !!check_setup_1.hasPackageJson();
    }
    if (dir && packageJson) {
        tutorial = check_setup_1.hasTutorialDep();
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
