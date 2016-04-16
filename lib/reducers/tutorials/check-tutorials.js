"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var exists_1 = require('../../services/exists');
var root_package_1 = require('../../services/root-package');
var tutorialError = 'This is an error with the tutorial itself';
function _isTutorial(name) {
    var pathToTutorialPackageJson = path_1.join(window.coderoad.dir, 'node_modules', name, 'package.json');
    if (!exists_1.fileExists(pathToTutorialPackageJson)) {
        console.log("Error with " + name + ": no package.json file found. " + tutorialError);
        return false;
    }
    var packageJson = JSON.parse(fs_1.readFileSync(pathToTutorialPackageJson, 'utf8'));
    if (!packageJson.main && packageJson.main.match(/coderoad.json$/)) {
        console.log("Error with " + name + ": main does not load a coderoad.json file. " + tutorialError);
        return false;
    }
    var pathToCoderoadJson = path_1.join(window.coderoad.dir, 'node_modules', name, packageJson.main);
    if (!exists_1.fileExists(pathToCoderoadJson)) {
        console.log("Error with " + name + ": no coderoad.json file. " + tutorialError);
        return false;
    }
    ;
    if (!packageJson.config || !packageJson.config.testRunner) {
        console.log("Error with " + name + ": no test runner specified. " + tutorialError);
        return false;
    }
    return true;
}
function searchForTutorials(deps) {
    if (!!deps && Object.keys(deps).length > 0) {
        return (Object.keys(deps)
            .filter(function (name) { return _isTutorial(name); })
            .map(function (name) {
            var pathToTutorialPackageJson = path_1.join(window.coderoad.dir, 'node_modules', name, 'package.json');
            if (!exists_1.fileExists(pathToTutorialPackageJson)) {
                console.log("Error with " + name + ": no package.json file found. " + tutorialError);
                return {
                    name: name,
                    version: 'NOT INSTALLED'
                };
            }
            var packageJson = root_package_1.default.get();
            return {
                name: name,
                version: packageJson.version
            };
        }));
    }
    else {
        return [];
    }
}
exports.searchForTutorials = searchForTutorials;
