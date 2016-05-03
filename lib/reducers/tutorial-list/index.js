"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
var check_1 = require('./check');
function tutorialListReducer(tutorialList, action) {
    if (tutorialList === void 0) { tutorialList = []; }
    switch (action.type) {
        case _types_1.TUTORIALS_FIND:
            var packageJson = store_1.default.getState().packageJson;
            return ([]
                .concat(check_1.searchForTutorials(packageJson.dependencies))
                .concat(check_1.searchForTutorials(packageJson.devDependencies)));
        default:
            return tutorialList;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialListReducer;
