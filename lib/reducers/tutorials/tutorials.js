"use strict";
var Type = require('../../actions/actionTypes');
var check_tutorials_1 = require('./check-tutorials');
function tutorialsReducer(tutorials, action) {
    if (tutorials === void 0) { tutorials = []; }
    switch (action.type) {
        case Type.LOAD_TUTORIALS:
            var packageJson = check_tutorials_1.loadRootPackageJson();
            if (!!packageJson) {
                return [].concat(check_tutorials_1.searchForTutorials(packageJson.dependencies))
                    .concat(check_tutorials_1.searchForTutorials(packageJson.devDependencies));
            }
            return [];
        default:
            return tutorials;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
