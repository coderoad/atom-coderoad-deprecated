"use strict";
var _types_1 = require('../../actions/_types');
var check_1 = require('./check');
function tutorialListReducer(tutorialList, action) {
    if (tutorialList === void 0) { tutorialList = []; }
    switch (action.type) {
        case _types_1.TUTORIALS_FIND:
            var _a = action.payload, packageJson = _a.packageJson, dir = _a.dir;
            return ([]
                .concat(check_1.searchForTutorials(dir, packageJson.dependencies))
                .concat(check_1.searchForTutorials(dir, packageJson.devDependencies)));
        default:
            return tutorialList;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialListReducer;
