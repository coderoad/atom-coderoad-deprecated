"use strict";
var exists_1 = require('./exists');
var path = require('path');
var editor_1 = require('../atom/editor');
var packageData = "{\n\"name\": \"demo\",\n\"dependencies\": {\n  \"coderoad-functional-school\": \"^0.1.9\"\n }\n}";
function createPackageJson() {
    var packagePath = path.join(window.coderoad.dir, 'package.json');
    return new Promise(function (resolve, reject) {
        editor_1.open(packagePath);
        setTimeout(function () {
            resolve();
        });
    }).then(function () {
        editor_1.set(packageData);
        window.coderoad.setup.hasPackageJson = true;
    });
}
exports.createPackageJson = createPackageJson;
function checkSetup() {
    var packagePath = path.join(window.coderoad.dir, 'package.json');
    if (exists_1.fileExists(packagePath)) {
        window.coderoad.setup.hasPackageJson = true;
    }
}
