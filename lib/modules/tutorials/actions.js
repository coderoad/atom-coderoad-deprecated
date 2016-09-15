"use strict";
var actions_1 = require('../alert/actions');
var types_1 = require('./types');
var actions_2 = require('../tutorial/actions');
exports.tutorialSet = actions_2.tutorialSet;
function tutorialUpdate(title) {
    return function (dispatch) {
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
function tutorialsUpdate() {
    return { type: types_1.TUTORIALS_UPDATE };
}
exports.tutorialsUpdate = tutorialsUpdate;
function tutorialsFind() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIALS_FIND, payload: { dir: dir } });
        dispatch(tutorialsUpdate());
    };
}
exports.tutorialsFind = tutorialsFind;
