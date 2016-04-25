"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var exists_1 = require('../../services/exists');
var is_tutorial_1 = require('./is-tutorial');
var store_1 = require('../../store');
function searchForTutorials(deps) {
    if (!!deps && Object.keys(deps).length > 0) {
        var dir_1 = store_1.default.getState().dir;
        return (Object.keys(deps)
            .filter(function (name) { return is_tutorial_1.isTutorial(name); })
            .map(function (name) {
            var pathToTutorialPackageJson = path_1.join(dir_1, 'node_modules', name, 'package.json');
            if (!exists_1.fileExists(pathToTutorialPackageJson)) {
                console.log("Error with " + name + ": no package.json file found. " + is_tutorial_1.tutorialError);
                return {
                    name: name,
                    version: 'NOT INSTALLED'
                };
            }
            var tutorialPackageJson = JSON.parse(fs_1.readFileSync(pathToTutorialPackageJson, 'utf8'));
            var version = tutorialPackageJson.version;
            return {
                name: name,
                version: version,
            };
        }));
    }
    else {
        return [];
    }
}
exports.searchForTutorials = searchForTutorials;
