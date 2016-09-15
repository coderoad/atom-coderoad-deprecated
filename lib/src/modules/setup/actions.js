"use strict";
var types_1 = require('./types');
function setupVerify() {
    return function (dispatch, getState) {
        dispatch(setupPackage());
        var _a = getState(), dir = _a.dir, packageJson = _a.packageJson;
        dispatch({ type: types_1.SETUP_VERIFY, payload: { dir: dir, packageJson: packageJson } });
    };
}
exports.setupVerify = setupVerify;
function setupPackage() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.SETUP_PACKAGE, payload: { dir: dir } });
    };
}
exports.setupPackage = setupPackage;
