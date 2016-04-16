"use strict";
var _types_1 = require('../../actions/_types');
var update_tutorial_1 = require('./update-tutorial');
var root_package_1 = require('../../services/root-package');
function tutorialsReducer(tutorials, action) {
    if (tutorials === void 0) { tutorials = []; }
    switch (action.type) {
        case _types_1.TUTORIAL_UPDATE:
            update_tutorial_1.tutorialUpdate(action.payload.name);
        case _types_1.TUTORIALS_FIND:
            return root_package_1.default.getTutorials();
        default:
            return tutorials;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
