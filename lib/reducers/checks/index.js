"use strict";
var _types_1 = require('../../actions/_types');
var verify_1 = require('./verify');
var _checks = {
    passed: false,
    system: {
        node: false,
        npm: false,
        xcode: false,
    },
    setup: {
        hasDir: false,
        hasPackageJson: false,
        hasTutorial: false,
    }
};
function checksReducer(checks, action) {
    if (checks === void 0) { checks = _checks; }
    switch (action.type) {
        case _types_1.SETUP_VERIFY:
            var _a = action.payload, dir = _a.dir, packageJson = _a.packageJson;
            return verify_1.default(dir, packageJson);
        default:
            return checks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checksReducer;
