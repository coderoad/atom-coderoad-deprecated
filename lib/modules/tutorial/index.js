"use strict";
var path_1 = require('path');
var types_1 = require('./types');
var config_1 = require('./utils/config');
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
function tutorialReducer(t, action) {
    if (t === void 0) { t = exports._tutorial; }
    switch (action.type) {
        case types_1.TUTORIAL_SET:
            var _a = action.payload, name_1 = _a.name, dir = _a.dir, version = _a.version;
            var packagePath = path_1.join(dir, 'node_modules', name_1);
            var packageJson = require(path_1.join(packagePath, 'package.json'));
            var config = config_1.tutorialConfig(packageJson, dir);
            var coderoadJsonPath = path_1.join(packagePath, packageJson.main);
            var _b = require(coderoadJsonPath), info = _b.info, pages = _b.pages, final = _b.final;
            return {
                name: packageJson.name,
                version: version,
                info: info,
                pages: pages,
                packageJson: packageJson,
                config: config,
                final: final,
            };
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialReducer;
//# sourceMappingURL=index.js.map