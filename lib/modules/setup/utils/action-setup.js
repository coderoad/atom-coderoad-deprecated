"use strict";
var path_1 = require('path');
var selectors_1 = require('../../../selectors');
var packageData = "{\n  \"name\": \"demo\",\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^0.2.2\"\n  }\n}";
function createPackageJson(dir) {
    var packagePath = path_1.join(dir, 'package.json');
    return new Promise(function (resolve, reject) {
        selectors_1.open(packagePath);
        setTimeout(function () { return resolve(); });
    }).then(function () {
        selectors_1.set(packageData);
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    selectors_1.openFolder();
}
exports.openDirectory = openDirectory;
