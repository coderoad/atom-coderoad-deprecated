"use strict";
var path = require('path');
var fs = require('fs');
var exists_1 = require('../services/exists');
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
    if (exists_1.fileExists(pathToTutorialPackageJson)) {
        var packageJson = JSON.parse(fs.readFileSync(pathToTutorialPackageJson, 'utf8'));
        if (packageJson.main && packageJson.main.match(/coderoad.json$/)) {
            var pathToCoderoadJson = path.join(window.coderoad.dir, 'node_modules', name, packageJson.main);
            return exists_1.fileExists(pathToCoderoadJson);
        }
    }
    return false;
}
function searchForTutorials(deps) {
    if (!!deps && Object.keys(deps).length > 0) {
        return Object.keys(deps).filter(function (name) { return _isTutorial(name); });
    }
    else {
        return [];
    }
}
exports.searchForTutorials = searchForTutorials;
