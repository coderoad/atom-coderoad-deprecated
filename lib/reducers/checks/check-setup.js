"use strict";
var check_tutorials_1 = require('../tutorials/check-tutorials');
function hasDirectory() {
    return new Promise(function (resolve, reject) {
        var hasDirectory = !!window.coderoad.dir;
        if (!hasDirectory) {
            resolve(true);
        }
        else {
            resolve(true);
        }
    });
}
exports.hasDirectory = hasDirectory;
function hasPackageJson() {
    return new Promise(function (resolve, reject) {
        var hasPackageJson = check_tutorials_1.packageJsonExists();
        if (!hasPackageJson) {
            resolve(true);
        }
        resolve(true);
    });
}
exports.hasPackageJson = hasPackageJson;
function hasTutorialDep() {
    return new Promise(function (resolve, reject) {
        var packageJson = hasPackageJson ? check_tutorials_1.loadRootPackageJson() : null;
        var hasTutorialDep = !!packageJson && _tutorialInstalled(packageJson.dependencies) ||
            _tutorialInstalled(packageJson.devDependencies);
        if (!hasTutorialDep) {
            resolve(true);
        }
        resolve(true);
    });
}
exports.hasTutorialDep = hasTutorialDep;
function _hasKeys(obj) {
    return Object.keys(obj).length > 0;
}
function _tutorialInstalled(location) {
    return !!location && _hasKeys(location) &&
        check_tutorials_1.searchForTutorials(location).length > 0;
}
