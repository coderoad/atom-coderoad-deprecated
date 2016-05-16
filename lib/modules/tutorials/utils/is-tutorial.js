"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var exists_1 = require('../../../services/exists');
exports.tutorialError = 'This is an error with the tutorial itself';
function isTutorial(dir, name) {
    var pathToTutorialPackageJson = path_1.join(dir, 'node_modules', name, 'package.json');
    if (!exists_1.fileExists(pathToTutorialPackageJson)) {
        console.log("Error with " + name + ": no package.json file found. " + exports.tutorialError);
        return false;
    }
    var packageJson = JSON.parse(fs_1.readFileSync(pathToTutorialPackageJson, 'utf8'));
    if (!packageJson.main && packageJson.main.match(/coderoad.json$/)) {
        console.log("Error with " + name + ": main does not load a coderoad.json file. " + exports.tutorialError);
        return false;
    }
    var pathToCoderoadJson = path_1.join(dir, 'node_modules', name, packageJson.main);
    if (!exists_1.fileExists(pathToCoderoadJson)) {
        console.log("Error with " + name + ": no coderoad.json file. " + exports.tutorialError);
        return false;
    }
    ;
    if (!packageJson.config || !packageJson.config.runner) {
        console.log("Error with " + name + ": no test runner specified. " + exports.tutorialError);
        return false;
    }
    return true;
}
exports.isTutorial = isTutorial;
