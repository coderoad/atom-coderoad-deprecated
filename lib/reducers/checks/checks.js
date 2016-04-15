"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var verify_1 = require('./verify');
var defaultChecks = {
    passed: false,
    system: {
        node: false,
        npm: false
    },
    setup: {
        dir: false,
        packageJson: false,
        tutorial: false
    }
};
function checksReducer(checks, action) {
    if (checks === void 0) { checks = defaultChecks; }
    switch (action.type) {
        case actionTypes_1.VERIFY_SETUP:
            return verify_1.default();
        default:
            return checks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checksReducer;
