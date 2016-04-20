"use strict";
var _types_1 = require('./_types');
function tutorialSet(name) {
    return {
        payload: { name: name },
        type: _types_1.TUTORIAL_SET,
    };
}
exports.tutorialSet = tutorialSet;
function tutorialsFind() {
    return { type: _types_1.TUTORIALS_FIND };
}
exports.tutorialsFind = tutorialsFind;
