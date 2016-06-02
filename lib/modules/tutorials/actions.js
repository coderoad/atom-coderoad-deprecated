"use strict";
var types_1 = require('./types');
var alert_1 = require('core-coderoad/lib/alert');
var actions_1 = require('../tutorial/actions');
exports.tutorialSet = actions_1.tutorialSet;
function tutorialUpdate(name) {
    return function (dispatch, getState) {
        var alert = {
            message: "run `npm install --save-dev " + name + "`",
            action: 'note',
            duration: 3000,
        };
        dispatch({ type: types_1.TUTORIAL_UPDATE, payload: { name: name } });
        dispatch(alert_1.alertOpen(alert));
    };
}
exports.tutorialUpdate = tutorialUpdate;
function tutorialsFind() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIALS_FIND, payload: { dir: dir } });
    };
}
exports.tutorialsFind = tutorialsFind;
