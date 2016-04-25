"use strict";
var _types_1 = require('./_types');
var package_1 = require('./package');
var store_1 = require('../store');
function setupVerify() {
    store_1.default.dispatch(package_1.packageSet());
    return { type: _types_1.SETUP_VERIFY };
}
exports.setupVerify = setupVerify;
