"use strict";
var Type = require('./actionTypes');
var tutorials_1 = require('../services/setup/tutorials');
function loadTutorials() {
    var tutorials = [];
    var packageJson = tutorials_1.loadRootPackageJson();
    if (window.coderoad.dir && !!packageJson) {
        tutorials = []
            .concat(tutorials_1.searchForTutorials(packageJson.dependencies))
            .concat(tutorials_1.searchForTutorials(packageJson.devDependencies));
    }
    return { type: Type.LOAD_TUTORIALS, payload: { tutorials: tutorials } };
}
exports.loadTutorials = loadTutorials;
