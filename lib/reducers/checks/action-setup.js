"use strict";
var path = require('path');
var editor_1 = require('../../atom/editor');
var actions_1 = require('../../atom/actions');
var store_1 = require('../../store/store');
var Action = require('../../actions/actions');
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
        store_1.store.dispatch(Action.verifySetup());
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    actions_1.openFolder();
}
exports.openDirectory = openDirectory;
