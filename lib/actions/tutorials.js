"use strict";
var actionTypes_1 = require('./actionTypes');
function loadTutorials() {
    return { type: actionTypes_1.LOAD_TUTORIALS };
}
exports.loadTutorials = loadTutorials;
function updateTutorial(name) {
    return { type: actionTypes_1.UPDATE_TUTORIAL, payload: { name: name } };
}
exports.updateTutorial = updateTutorial;
