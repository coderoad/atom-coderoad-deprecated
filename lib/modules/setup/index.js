"use strict";
var checks_1 = require('./checks');
exports.checks = checks_1.default;
var package_json_1 = require('./package-json');
exports.packageJson = package_json_1.default;
var actions_1 = require('./actions');
exports.setupVerify = actions_1.setupVerify;
exports.setupPackage = actions_1.setupPackage;
