"use strict";
var _types_1 = require('./_types');
function packageSet() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: _types_1.PACKAGE_SET, payload: { dir: dir } });
    };
}
exports.packageSet = packageSet;
