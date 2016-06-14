"use strict";
var path_1 = require('path');
var core_coderoad_1 = require('core-coderoad');
var packageData = "{\n  \"name\": \"demo\",\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^0.2.2\"\n  }\n}";
function createPackageJson(dir) {
    var packagePath = path_1.join(dir, 'package.json');
    return new Promise(function (resolve, reject) {
        core_coderoad_1.open(packagePath);
        setTimeout(function () { return resolve(); });
    }).then(function () {
        core_coderoad_1.set(packageData);
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    core_coderoad_1.openFolder();
}
exports.openDirectory = openDirectory;
