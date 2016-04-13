"use strict";
var check_system_1 = require('./check-system');
var check_setup_1 = require('./check-setup');
function allTrue(obj) {
    return Object.values(obj).every(function (x) { return x === true; });
}
function verified(checks) {
    return allTrue(checks.system) && allTrue(checks.setup);
}
function result(x) {
    return x;
}
function verifySetup() {
    var checks = {
        system: {
            node: true,
            npm: !!check_system_1.npmVersionThreeOrLater()
        },
        setup: {
            dir: !!check_setup_1.hasDirectory(),
            packageJson: !!check_setup_1.hasPackageJson(),
            tutorial: !!check_setup_1.hasTutorialDep()
        }
    };
    checks.passed = verified(checks);
    return checks;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verifySetup;
