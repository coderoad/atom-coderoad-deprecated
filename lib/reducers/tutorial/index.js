"use strict";
var path_1 = require('path');
var tutorial_config_1 = require('./tutorial-config');
var _types_1 = require('../../actions/_types');
var config_paths_1 = require('./config-paths');
var _tutorial = {
    name: null,
    info: null,
    pages: [],
    packageJson: null,
    config: null,
};
function tutorialReducer(tutorial, action) {
    if (tutorial === void 0) { tutorial = _tutorial; }
    switch (action.type) {
        case _types_1.TUTORIAL_SET:
            var _a = action.payload, name_1 = _a.name, dir = _a.dir;
            var packagePath = path_1.join(dir, 'node_modules', name_1);
            var packageJson = require(path_1.join(packagePath, 'package.json'));
            var config = tutorial_config_1.tutorialConfig(packageJson, dir);
            var _b = require(path_1.join(packagePath, packageJson.main)), info = _b.info, pages = _b.pages;
            pages = config_paths_1.default(dir, name_1, config, pages || []);
            return {
                name: packageJson.name,
                info: info,
                pages: pages,
                packageJson: packageJson,
                config: config,
            };
        default:
            return tutorial;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialReducer;
