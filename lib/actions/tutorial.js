"use strict";
var _types_1 = require('./_types');
function tutorialSet(name) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: _types_1.TUTORIAL_SET, payload: { name: name, dir: dir } });
    };
}
exports.tutorialSet = tutorialSet;
function tutorialUpdate(name) {
    return function (dispatch, getState) {
        var alert = {
            message: "run `npm install --save-dev " + name + "`",
            action: 'note',
            duration: 4000,
        };
        dispatch({ type: _types_1.TUTORIAL_UPDATE, payload: { name: name } });
        dispatch({ type: _types_1.ALERT_TOGGLE, payload: { alert: alert } });
    };
}
exports.tutorialUpdate = tutorialUpdate;
function tutorialsFind() {
    return function (dispatch, getState) {
        var _a = getState(), packageJson = _a.packageJson, dir = _a.dir;
        dispatch({ type: _types_1.TUTORIALS_FIND, payload: { packageJson: packageJson, dir: dir } });
    };
}
exports.tutorialsFind = tutorialsFind;
