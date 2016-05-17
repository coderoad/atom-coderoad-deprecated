"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
var is_tutorial_1 = require('./is-tutorial');
var update_1 = require('./update');
function searchForTutorials(dir, deps) {
    if (!!deps && Object.keys(deps).length > 0) {
        return (Object.keys(deps)
            .filter(function (name) { return is_tutorial_1.isTutorial(dir, name); })
            .map(function (name) {
            var pathToTutorialPackageJson = path_1.join(dir, 'node_modules', name, 'package.json');
            if (!node_file_exists_1.default(pathToTutorialPackageJson)) {
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
                latest: !!update_1.canUpdateTutorial(name, version)
            };
        }));
    }
    else {
        return [];
    }
}
exports.searchForTutorials = searchForTutorials;
