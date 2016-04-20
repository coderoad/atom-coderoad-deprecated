"use strict";
var _types_1 = require('../../actions/_types');
var path_1 = require('path');
var tutorial_config_1 = require('./tutorial-config');
var _tutorial = {
    name: null,
    info: null,
    chapters: [],
    packageJson: null,
    config: null
};
function tutorialReducer(tutorial, action) {
    if (tutorial === void 0) { tutorial = _tutorial; }
    switch (action.type) {
        case _types_1.TUTORIAL_SET:
            var name_1 = action.payload.name;
            var packagePath = path_1.join(window.coderoad.dir, 'node_modules', name_1);
            var packageJson = require(path_1.join(packagePath, 'package.json'));
            var config = tutorial_config_1.tutorialConfig(packageJson);
            var _a = require(path_1.join(packagePath, packageJson.main)), info = _a.info, chapters = _a.chapters;
            return {
                name: packageJson.name,
                info: info,
                chapters: chapters,
                packageJson: packageJson,
                config: config
            };
        default:
            return tutorial;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialReducer;
