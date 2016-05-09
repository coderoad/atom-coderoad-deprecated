"use strict";
var _types_1 = require('./_types');
var package_1 = require('./package');
function setupVerify() {
    return function (dispatch, getState) {
        dispatch(package_1.packageSet());
        var _a = getState(), dir = _a.dir, packageJson = _a.packageJson;
        dispatch({ type: _types_1.SETUP_VERIFY, payload: { dir: dir, packageJson: packageJson } });
    };
}
exports.setupVerify = setupVerify;
