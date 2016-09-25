"use strict";
var index_1 = require('../../../index');
var path_1 = require('path');
var packageData = "{\n  \"name\": \"demo\",\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"dependencies\": {\n    \"coderoad-functional-school\": \"^1.1.3\"\n  }\n}";
function createPackageJson(dir) {
    var packagePath = path_1.join(dir, 'package.json');
    return new Promise(function (resolve, reject) {
        open(packagePath);
        setTimeout(function () { return resolve(); });
    }).then(function () {
        index_1.editor.action.set(packageData);
    });
}
exports.createPackageJson = createPackageJson;
function openDirectory() {
    index_1.editor.action.openFolder();
}
exports.openDirectory = openDirectory;
//# sourceMappingURL=action-setup.js.map