"use strict";
var Type = require('../../actions/actionTypes');
var defaultSetup = {
    hasDirectory: false,
    hasPackageJson: false,
    hasTutorialDep: false,
    hasTutorial: false,
    hasTestRunner: false
};
function setupReducer(setup, action) {
    if (setup === void 0) { setup = defaultSetup; }
    switch (action.type) {
        case Type.SET_SETUP:
            return Object.assign(setup, action.payload);
        default:
            return setup;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupReducer;
