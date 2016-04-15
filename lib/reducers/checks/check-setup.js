"use strict";
var check_tutorials_1 = require('../tutorials/check-tutorials');
function hasDirectory() {
    return !!window.coderoad.dir;
}
exports.hasDirectory = hasDirectory;
function hasPackageJson() {
    return check_tutorials_1.packageJsonExists();
}
exports.hasPackageJson = hasPackageJson;
function hasTutorialDep() {
    var packageJson = hasPackageJson ? check_tutorials_1.loadRootPackageJson() : null;
    return !!packageJson && _tutorialInstalled(packageJson.dependencies) ||
        _tutorialInstalled(packageJson.devDependencies);
}
exports.hasTutorialDep = hasTutorialDep;
function _hasKeys(obj) {
    return Object.keys(obj).length > 0;
}
function _tutorialInstalled(location) {
    return !!location && _hasKeys(location) &&
        check_tutorials_1.searchForTutorials(location).length > 0;
}
