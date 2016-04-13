"use strict";
var Type = require('./actionTypes');
function loadTutorials() {
    return { type: Type.LOAD_TUTORIALS };
}
exports.loadTutorials = loadTutorials;
