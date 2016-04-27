"use strict";
var path_1 = require('path');
var editor_1 = require('../../atom/editor');
var editor_2 = require('../../atom/editor');
var store_1 = require('../../store');
var actions_1 = require('../../actions');
var packageData = "{\n  \"name\": \"demo\",\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^0.2.1\"\n  }\n}";
function createPackageJson() {
    var dir = store_1.default.getState().dir;
    var packagePath = path_1.join(dir, 'package.json');
    return new Promise(function (resolve, reject) {
        editor_1.open(packagePath);
        setTimeout(function () {
            resolve();
        });
    }).then(function () {
        editor_1.set(packageData);
        store_1.default.dispatch(actions_1.setupVerify());
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    editor_2.openFolder();
}
exports.openDirectory = openDirectory;
