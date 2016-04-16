"use strict";
var _types_1 = require('./_types');
function tutorialSet() {
    return { type: _types_1.TUTORIAL_SET };
}
exports.tutorialSet = tutorialSet;
function tutorialUpdate(name) {
    return { type: _types_1.TUTORIAL_UPDATE, payload: { name: name } };
}
exports.tutorialUpdate = tutorialUpdate;
function tutorialsFind() {
    return { type: _types_1.TUTORIALS_FIND };
}
exports.tutorialsFind = tutorialsFind;
