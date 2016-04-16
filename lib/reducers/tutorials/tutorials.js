"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var update_tutorial_1 = require('./update-tutorial');
var root_package_1 = require('../../services/root-package');
function tutorialsReducer(tutorials, action) {
    if (tutorials === void 0) { tutorials = []; }
    switch (action.type) {
        case actionTypes_1.UPDATE_TUTORIAL:
            update_tutorial_1.updateTutorial(action.payload.name);
        case actionTypes_1.LOAD_TUTORIALS:
            return root_package_1.default.getTutorials();
        default:
            return tutorials;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
