"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
var types_1 = require('../types');
var readParse = function (p) { return JSON.parse(fs_1.readFileSync(p, 'utf8')); };
function packageJson(pj, action) {
    if (pj === void 0) { pj = null; }
    switch (action.type) {
        case types_1.SETUP_PACKAGE:
            var pathToPackageJson = path_1.join(action.payload.dir, 'package.json');
            return node_file_exists_1.default(pathToPackageJson)
                ? readParse(pathToPackageJson)
                : null;
        default:
            return pj;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = packageJson;
