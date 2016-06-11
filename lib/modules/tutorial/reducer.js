"use strict";
var path_1 = require('path');
var config_1 = require('./utils/config');
var types_1 = require('./types');
var config_paths_1 = require('./utils/config-paths');
var _tutorial = {
    title: null,
    info: null,
    pages: [],
    packageJson: null,
    config: null,
};
function tutorialReducer(tutorial, action) {
    if (tutorial === void 0) { tutorial = _tutorial; }
    switch (action.type) {
        case types_1.TUTORIAL_SET:
            var _a = action.payload, title = _a.title, dir = _a.dir;
            var packagePath = path_1.join(dir, 'node_modules', title);
            var packageJson = require(path_1.join(packagePath, 'package.json'));
            var config = config_1.tutorialConfig(packageJson, dir);
            var _b = require(path_1.join(packagePath, packageJson.main)), info = _b.info, pages = _b.pages;
            console.log(packageJson, packageJson.name);
            pages = config_paths_1.default(dir, title, config, pages || []);
            return {
                title: packageJson.name,
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
