"use strict";
var check_1 = require('./utils/check');
var types_1 = require('./types');
function tutorials(tutorials, action) {
    if (tutorials === void 0) { tutorials = []; }
    switch (action.type) {
        case types_1.TUTORIALS_FIND:
            var _a = action.payload, packageJson = _a.packageJson, dir = _a.dir;
            return ([]
                .concat(check_1.searchForTutorials(dir, packageJson.dependencies))
                .concat(check_1.searchForTutorials(dir, packageJson.devDependencies)));
        default:
            return tutorials;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorials;
