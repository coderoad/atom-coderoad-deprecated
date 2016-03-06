"use strict";
var tutorials_1 = require('./tutorials');
var setup_actions_1 = require('./setup-actions');
var _base_1 = require('../_base');
var Action = require('../actions/actions');
function verifySetupComplete() {
    hasDirectory()
        .then(hasPackageJson)
        .then(hasTutorialDep)
        .then(hasTestRunner)
        .then(function () {
        _base_1.store.dispatch(Action.setupWarning(null));
        _base_1.store.dispatch(Action.loadTutorials());
    })
        .catch(function (warning) {
        console.log(warning);
        _base_1.store.dispatch(Action.setupWarning(warning));
    });
}
exports.verifySetupComplete = verifySetupComplete;
function hasDirectory() {
    return new Promise(function (resolve, reject) {
        var hasDirectory = !!window.coderoad.dir;
        if (!hasDirectory) {
            reject({
                key: 'noProject',
                title: 'Create an Atom Project',
                click: setup_actions_1.openDirectory,
                text: 'File > Open > a workspace folder'
            });
        }
        else {
            resolve();
        }
    });
}
function hasPackageJson() {
    return new Promise(function (resolve, reject) {
        var hasPackageJson = tutorials_1.packageJsonExists();
        if (!hasPackageJson) {
            reject({
                key: 'noPackageJson',
                title: 'Create a `package.json` file',
                click: setup_actions_1.createPackageJson,
                text: '`npm init`'
            });
        }
        resolve();
    });
}
function hasTutorialDep() {
    return new Promise(function (resolve, reject) {
        var packageJson = hasPackageJson ? tutorials_1.loadRootPackageJson() : null;
        var hasTutorialDep = !!packageJson && _tutorialInstalled(packageJson.dependencies) ||
            _tutorialInstalled(packageJson.devDependencies);
        if (!hasTutorialDep) {
            reject({
                key: 'noTutorialDep',
                title: 'Install a Tutorial',
                click: null,
                text: '`npm i --save coderoad-functional-school`'
            });
        }
        resolve();
    });
}
function hasTestRunner() {
    return new Promise(function (resolve, reject) {
        var hasTestRunner = true;
        if (!hasTestRunner) {
            reject({
                key: 'noTestRunner',
                title: 'Error with Tutorial',
                click: null,
                text: 'no test runner found'
            });
        }
        resolve();
    });
}
function _hasKeys(obj) {
    return Object.keys(obj).length > 0;
}
function _tutorialInstalled(location) {
    return !!location && _hasKeys(location) && tutorials_1.searchForTutorials(location).length > 0;
}
