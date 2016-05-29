"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
var types_1 = require('../types');
function packageJson(pj, action) {
    if (pj === void 0) { pj = null; }
    switch (action.type) {
        case types_1.SETUP_PACKAGE:
            var dir = action.payload.dir;
            var pathToPackageJson = path_1.join(dir, 'package.json');
            if (node_file_exists_1.default(pathToPackageJson)) {
                return JSON.parse(fs_1.readFileSync(pathToPackageJson, 'utf8'));
            }
            return null;
        default:
            return pj;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = packageJson;
