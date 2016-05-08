"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function packageSet() {
    var dir = store_1.default.getState().dir;
    return { type: _types_1.PACKAGE_SET, payload: { dir: dir } };
}
exports.packageSet = packageSet;
