"use strict";
var path = require('path');
var fs = require('fs');
var exists_1 = require('../../services/exists');
var update_tutorial_1 = require('./update-tutorial');
var tutorialError = 'This is an error with the tutorial itself';
function packageJsonExists() {
    var pathToPackageJson = path.join(window.coderoad.dir, 'package.json');
    return exists_1.fileExists(pathToPackageJson);
}
exports.packageJsonExists = packageJsonExists;
function loadRootPackageJson() {
    var pathToPackageJson = path.join(window.coderoad.dir, 'package.json');
    if (exists_1.fileExists(pathToPackageJson)) {
        return JSON.parse(fs.readFileSync(pathToPackageJson, 'utf8'));
    }
    return null;
}
exports.loadRootPackageJson = loadRootPackageJson;
function _isTutorial(name) {
    var pathToTutorialPackageJson = path.join(window.coderoad.dir, 'node_modules', name, 'package.json');
    if (!exists_1.fileExists(pathToTutorialPackageJson)) {
        console.log("Error with " + name + ": no package.json file found. " + tutorialError);
        return false;
    }
    var packageJson = JSON.parse(fs.readFileSync(pathToTutorialPackageJson, 'utf8'));
    if (!packageJson.main && packageJson.main.match(/coderoad.json$/)) {
        console.log("Error with " + name + ": main does not load a coderoad.json file. " + tutorialError);
        return false;
    }
    var pathToCoderoadJson = path.join(window.coderoad.dir, 'node_modules', name, packageJson.main);
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
            var pathToTutorialPackageJson = path.join(window.coderoad.dir, 'node_modules', name, 'package.json');
            if (!exists_1.fileExists(pathToTutorialPackageJson)) {
                console.log("Error with " + name + ": no package.json file found. " + tutorialError);
                return {
                    name: name,
                    version: 'NOT INSTALLED'
                };
            }
            var packageJson = JSON.parse(fs.readFileSync(pathToTutorialPackageJson, 'utf8'));
            return {
                name: name,
                version: packageJson.version,
                latest: update_tutorial_1.canUpdateTutorial(name, packageJson.version)
            };
        }));
    }
    else {
        return [];
    }
}
exports.searchForTutorials = searchForTutorials;
