"use strict";
var fs_1 = require('fs');
var exists_1 = require('./exists');
var path_1 = require('path');
var RootPackageService = (function () {
    function RootPackageService() {
    }
    RootPackageService.prototype.getRootPackage = function () {
        var pathToPackageJson = path_1.join(window.coderoad.dir, 'package.json');
        if (exists_1.fileExists(pathToPackageJson)) {
            return JSON.parse(fs_1.readFileSync(pathToPackageJson, 'utf8'));
        }
        return null;
    };
    return RootPackageService;
}());
