"use strict";
var check_tutorials_1 = require('../tutorials/check-tutorials');
var root_package_1 = require('../../services/root-package');
function hasDirectory() {
    return !!window.coderoad.dir;
}
exports.hasDirectory = hasDirectory;
function hasPackageJson() {
    return check_tutorials_1.packageJsonExists();
}
exports.hasPackageJson = hasPackageJson;
function hasTutorialDep() {
    var tutorials = root_package_1.default.getTutorials();
    console.log(tutorials);
    return !!tutorials && tutorials.length > 0;
}
exports.hasTutorialDep = hasTutorialDep;
