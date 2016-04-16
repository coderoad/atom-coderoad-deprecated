"use strict";
var path_1 = require('path');
var editor_1 = require('../../atom/editor');
var actions_1 = require('../../atom/actions');
var store_1 = require('../../store/store');
var _actions_1 = require('../../actions/_actions');
var packageData = "{\n  \"name\": \"demo\",\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^0.2.1\"\n  }\n}";
function createPackageJson() {
    var packagePath = path_1.join(window.coderoad.dir, 'package.json');
    return new Promise(function (resolve, reject) {
        editor_1.open(packagePath);
        setTimeout(function () {
            resolve();
        });
    }).then(function () {
        editor_1.set(packageData);
        store_1.store.dispatch(_actions_1.setupVerify());
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    actions_1.openFolder();
}
exports.openDirectory = openDirectory;
