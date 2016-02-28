"use strict";
var package_1 = require('../services/package');
function getStateFromPackage(name) {
    package_1.default.selectPackage(name);
    return Object.assign({}, {
        project: package_1.default.getProject(),
        route: package_1.default.getSavedRoute(),
        position: package_1.default.getSavedPosition(),
        progress: package_1.default.getProgress(),
        page: {},
        tasks: []
    });
}
exports.getStateFromPackage = getStateFromPackage;
function getInitialState() {
    return {
        project: {},
        route: 'projects',
        position: {},
        progress: {},
        page: {},
        tasks: [],
        editorActions: false,
        runTests: false,
        tutorials: [],
        alert: {},
        log: { open: false, message: '' },
        hint: []
    };
}
exports.getInitialState = getInitialState;
