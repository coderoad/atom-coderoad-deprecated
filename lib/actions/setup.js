"use strict";
var _types_1 = require('./_types');
var package_1 = require('./package');
var store_1 = require('../store');
function setupVerify() {
    store_1.default.dispatch(package_1.packageSet());
    var _a = store_1.default.getState(), dir = _a.dir, packageJson = _a.packageJson;
    return { type: _types_1.SETUP_VERIFY, payload: { dir: dir, packageJson: packageJson } };
}
exports.setupVerify = setupVerify;
