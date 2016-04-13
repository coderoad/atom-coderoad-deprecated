"use strict";
var Type = require('../../actions/actionTypes');
var setup_1 = require('./setup');
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
        case Type.VERIFY_SETUP:
            return setup_1.default();
        default:
            return checks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checksReducer;
