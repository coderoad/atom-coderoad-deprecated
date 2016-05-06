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
        dir: false,
        packageJson: false,
        tutorial: false,
    }
};
function checksReducer(checks, action) {
    if (checks === void 0) { checks = _checks; }
    switch (action.type) {
        case _types_1.SETUP_VERIFY:
            return verify_1.default();
        default:
            return checks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checksReducer;
