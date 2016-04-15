"use strict";
var check_system_1 = require('./check-system');
var check_setup_1 = require('./check-setup');
var result = function (x) { return x; };
var allTrue = function (obj) {
    return Object.values(obj).every(function (x) { return x === true; });
};
function verifySetup() {
    var checks = {
        system: {
            node: !!check_system_1.nodeMinVersion(),
            npm: !!check_system_1.npmMinVersion()
        },
        setup: {
            dir: !!check_setup_1.hasDirectory(),
            packageJson: !!check_setup_1.hasPackageJson(),
            tutorial: !!check_setup_1.hasTutorialDep()
        }
    };
    checks.system.passed = allTrue(checks.system);
    checks.setup.passed = allTrue(checks.setup);
    checks.passed = checks.system.passed && checks.setup.passed;
    console.log('checks', checks);
    return checks;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verifySetup;
