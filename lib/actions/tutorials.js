"use strict";
var actionTypes_1 = require('./actionTypes');
function setTutorialInfo() {
    return { type: actionTypes_1.TUTORIAL_INFO_SET };
}
exports.setTutorialInfo = setTutorialInfo;
function loadTutorials() {
    return { type: actionTypes_1.TUTORIALS_LOAD };
}
exports.loadTutorials = loadTutorials;
function updateTutorial(name) {
    return { type: actionTypes_1.TUTORIAL_UPDATE, payload: { name: name } };
}
exports.updateTutorial = updateTutorial;
