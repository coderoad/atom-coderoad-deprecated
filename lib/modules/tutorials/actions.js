"use strict";
var types_1 = require('./types');
var actions_1 = require('../../actions');
function tutorialUpdate(name) {
    return function (dispatch, getState) {
        var alert = {
            message: "run `npm install --save-dev " + name + "`",
            action: 'note',
            duration: 3000,
        };
        dispatch({ type: types_1.TUTORIAL_UPDATE, payload: { name: name } });
        dispatch(actions_1.alertOpen(alert));
    };
}
exports.tutorialUpdate = tutorialUpdate;
function tutorialsFind() {
    return function (dispatch, getState) {
        var _a = getState(), packageJson = _a.packageJson, dir = _a.dir;
        dispatch({ type: types_1.TUTORIALS_FIND, payload: { packageJson: packageJson, dir: dir } });
    };
}
exports.tutorialsFind = tutorialsFind;
