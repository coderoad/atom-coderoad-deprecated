"use strict";
var actions_1 = require('../alert/actions');
var types_1 = require('./types');
var actions_2 = require('../tutorial/actions');
exports.tutorialSet = actions_2.tutorialSet;
function tutorialUpdate(title) {
    return function (dispatch, getState) {
        var alert = {
            message: "run `npm install --save-dev " + title + "`",
            action: 'note',
            duration: 3000,
        };
        dispatch({ type: types_1.TUTORIAL_UPDATE, payload: { title: title } });
        dispatch(actions_1.alertOpen(alert));
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
