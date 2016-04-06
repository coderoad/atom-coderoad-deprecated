"use strict";
var path = require('path');
var editor_1 = require('../../atom/editor');
var actions_1 = require('../../atom/actions');
var setup_1 = require('./setup');
var packageData = "{\n  \"name\": \"demo\",\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^0.2.1\"\n  }\n}";
function createPackageJson() {
    var packagePath = path.join(window.coderoad.dir, 'package.json');
    return new Promise(function (resolve, reject) {
        editor_1.open(packagePath);
        setTimeout(function () {
            resolve();
        });
    }).then(function () {
        editor_1.set(packageData);
        setup_1.verifySetupComplete();
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    return actions_1.openFolder();
}
exports.openDirectory = openDirectory;
function installTutorial() {
    return actions_1.openTerminal();
}
exports.installTutorial = installTutorial;
