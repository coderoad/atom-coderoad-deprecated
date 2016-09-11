"use strict";
var path_1 = require('path');
var types_1 = require('./types');
var config_1 = require('./utils/config');
var config_paths_1 = require('./utils/config-paths');
exports._tutorial = {
    name: 'default',
    version: '0.1.0',
    info: {
        title: 'error',
        description: 'Something went wrong. Tutorial not loaded.'
    },
    pages: [],
    packageJson: null,
    config: null,
};
var configured = new Set();
function tutorialReducer(t, action) {
    if (t === void 0) { t = exports._tutorial; }
    switch (action.type) {
        case types_1.TUTORIAL_SET:
            var _a = action.payload, name_1 = _a.name, dir = _a.dir, version = _a.version;
            var packagePath = path_1.join(dir, 'node_modules', name_1);
            var packageJson = require(path_1.join(packagePath, 'package.json'));
            var config = config_1.tutorialConfig(packageJson, dir);
            var coderoadJsonPath = path_1.join(packagePath, packageJson.main);
            var _b = require(coderoadJsonPath), info = _b.info, pages = _b.pages;
            if (configured.has(name_1)) {
                pages = config_paths_1.default(dir, name_1, config, pages || []);
            }
            else {
                configured.add(name_1);
            }
            return {
                name: packageJson.name,
                version: version,
                info: info,
                pages: pages,
                packageJson: packageJson,
                config: config,
            };
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialReducer;
