"use strict";
var types_1 = require('./types');
var core_coderoad_1 = require('core-coderoad');
var actions_1 = require('../tutorial/actions');
exports.tutorialSet = actions_1.tutorialSet;
function tutorialUpdate(title) {
    return function (dispatch, getState) {
        var alert = {
            message: "run `npm install --save-dev " + title + "`",
            action: 'note',
            duration: 3000,
        };
        dispatch({ type: types_1.TUTORIAL_UPDATE, payload: { title: title } });
        dispatch(core_coderoad_1.alertOpen(alert));
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
