"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function tutorialSet(name) {
    var dir = store_1.default.getState().dir;
    return { type: _types_1.TUTORIAL_SET, payload: { name: name, dir: dir } };
}
exports.tutorialSet = tutorialSet;
function tutorialUpdate(name) {
    return { type: _types_1.TUTORIAL_UPDATE, payload: { name: name } };
}
exports.tutorialUpdate = tutorialUpdate;
function tutorialsFind() {
    var _a = store_1.default.getState(), packageJson = _a.packageJson, dir = _a.dir;
    return { type: _types_1.TUTORIALS_FIND, payload: { packageJson: packageJson, dir: dir } };
}
exports.tutorialsFind = tutorialsFind;
