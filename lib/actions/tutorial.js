"use strict";
var _types_1 = require('./_types');
function tutorialSet(name) {
    return { type: _types_1.TUTORIAL_SET, payload: { name: name } };
}
exports.tutorialSet = tutorialSet;
function tutorialsFind() {
    return { type: _types_1.TUTORIALS_FIND };
}
exports.tutorialsFind = tutorialsFind;
