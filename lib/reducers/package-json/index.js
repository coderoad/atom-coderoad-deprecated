"use strict";
var _types_1 = require('../../actions/_types');
var path_1 = require('path');
var fs_1 = require('fs');
var exists_1 = require('../../services/exists');
function packageJsonReducer(pj, action) {
    if (pj === void 0) { pj = null; }
    switch (action.type) {
        case _types_1.PACKAGE_SET:
            var pathToPackageJson = path_1.join(action.payload.dir, 'package.json');
            if (exists_1.fileExists(pathToPackageJson)) {
                return JSON.parse(fs_1.readFileSync(pathToPackageJson, 'utf8'));
            }
            return null;
        default:
            return pj;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = packageJsonReducer;
