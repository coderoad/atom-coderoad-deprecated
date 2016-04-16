"use strict";
var fs_1 = require('fs');
var exists_1 = require('./exists');
var path_1 = require('path');
var RootPackageService = (function () {
    function RootPackageService() {
        this.packageJson = null;
    }
    RootPackageService.prototype.set = function () {
        var pathToPackageJson = path_1.join(window.coderoad.dir, 'package.json');
        if (exists_1.fileExists(pathToPackageJson)) {
            this.packageJson = JSON.parse(fs_1.readFileSync(pathToPackageJson, 'utf8'));
        }
        else {
            return null;
        }
    };
    RootPackageService.prototype.get = function () {
        return this.packageJson;
    };
    return RootPackageService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new RootPackageService();
