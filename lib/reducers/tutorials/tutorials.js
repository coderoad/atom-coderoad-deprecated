"use strict";
var _types_1 = require('../../actions/_types');
var update_tutorial_1 = require('./update-tutorial');
var root_package_1 = require('../../services/root-package');
var check_tutorials_1 = require('./check-tutorials');
function tutorialsReducer(tutorials, action) {
    if (tutorials === void 0) { tutorials = []; }
    switch (action.type) {
        case _types_1.TUTORIAL_UPDATE:
            update_tutorial_1.tutorialUpdate(action.payload.name);
        case _types_1.TUTORIALS_FIND:
            var packageJson = root_package_1.default.get();
            return ([]
                .concat(check_tutorials_1.searchForTutorials(packageJson.dependencies))
                .concat(check_tutorials_1.searchForTutorials(packageJson.devDependencies)));
        default:
            return tutorials;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
