"use strict";
var Type = require('./actionTypes');
function loadTutorials() {
    return { type: Type.LOAD_TUTORIALS };
}
exports.loadTutorials = loadTutorials;
function updateTutorial(name) {
    return { type: Type.UPDATE_TUTORIAL, payload: { name: name } };
}
exports.updateTutorial = updateTutorial;
