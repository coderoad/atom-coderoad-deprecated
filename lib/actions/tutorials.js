"use strict";
var _base_1 = require('../_base');
var Action = require('./actions');
var path = require('path');
var fs = require('fs');
var Type = require('./actionTypes');
var exists_1 = require('../services/exists');
function loadTutorials() {
    var tutorials = [];
    if (window.coderoad.dir) {
        var packageJson = loadRootPackageJson();
        if (!packageJson) {
            window.coderoad.setup.hasPackageJson = null;
            var message = 'No package.json file available. Try running "npm init --y" in terminal';
            console.log(message);
            _base_1.store.dispatch(Action.toggleAlert({ message: message, action: 'tip', duration: 6000 }));
        }
        else {
            tutorials = []
                .concat(searchForTutorials(packageJson.dependencies))
                .concat(searchForTutorials(packageJson.devDependencies));
        }
    }
    return { type: Type.LOAD_TUTORIALS, payload: { tutorials: tutorials } };
}
exports.loadTutorials = loadTutorials;
function loadRootPackageJson() {
    var pathToPackageJson = path.join(window.coderoad.dir, 'package.json');
    if (exists_1.fileExists(pathToPackageJson)) {
        return JSON.parse(fs.readFileSync(pathToPackageJson, 'utf8'));
    }
    return null;
}
function isTutorial(name) {
    var pathToTutorialPackageJson = path.join(window.coderoad.dir, 'node_modules', name, 'package.json');
    if (exists_1.fileExists(pathToTutorialPackageJson)) {
        var packageJson = JSON.parse(fs.readFileSync(pathToTutorialPackageJson, 'utf8'));
        if (packageJson.main && packageJson.main.match(/coderoad.json$/)) {
            var pathToCoderoadJson = path.join(window.coderoad.dir, 'node_modules', name, packageJson.main);
            if (exists_1.fileExists(pathToCoderoadJson)) {
                return true;
            }
        }
    }
    return false;
}
function searchForTutorials(deps) {
    if (!!deps && Object.keys(deps).length > 0) {
        return Object.keys(deps).filter(function (name) { return isTutorial(name); });
    }
    else {
        return [];
    }
}
