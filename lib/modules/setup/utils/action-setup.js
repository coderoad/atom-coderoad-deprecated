"use strict";
var path_1 = require('path');
var editor_1 = require('../../../atom/editor');
var packageData = "{\n  \"name\": \"demo\",\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^0.2.2\"\n  }\n}";
function createPackageJson(dir) {
    var packagePath = path_1.join(dir, 'package.json');
    return new Promise(function (resolve, reject) {
        editor_1.open(packagePath);
        setTimeout(function () { return resolve(); });
    }).then(function () {
        editor_1.set(packageData);
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    editor_1.openFolder();
}
exports.openDirectory = openDirectory;
