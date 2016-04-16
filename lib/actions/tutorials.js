"use strict";
var actionTypes_1 = require('./actionTypes');
function setTutorialInfo() {
    return { type: actionTypes_1.SET_TUTORIAL_INFO };
}
exports.setTutorialInfo = setTutorialInfo;
function loadTutorials() {
    return { type: actionTypes_1.LOAD_TUTORIALS };
}
exports.loadTutorials = loadTutorials;
function updateTutorial(name) {
    return { type: actionTypes_1.UPDATE_TUTORIAL, payload: { name: name } };
}
exports.updateTutorial = updateTutorial;
