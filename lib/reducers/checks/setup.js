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
            npm: check_system_1.npmVersionThreeOrLater().then(result)
        },
        setup: {
            dir: check_setup_1.hasDirectory().then(result),
            packageJson: check_setup_1.hasPackageJson().then(result),
            tutorial: check_setup_1.hasTutorialDep().then(result)
        }
    };
    checks.passed = verified(checks);
    return checks;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verifySetup;
