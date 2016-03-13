"use strict";
var tutorials_1 = require('./tutorials');
var setup_actions_1 = require('./setup-actions');
var _base_1 = require('../_base');
var Action = require('../actions/actions');
function verifySetupComplete() {
    hasDirectory()
        .then(hasPackageJson)
        .then(hasTutorialDep)
        .then(function () {
        _base_1.store.dispatch(Action.setupWarning(null));
        _base_1.store.dispatch(Action.loadTutorials());
    })
        .catch(function (warning) {
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
                text: 'Start by opening a folder to work in.\nFile > Open',
                verify: null
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
                text: 'Open a terminal in this directory and run:\n`npm init` or `npm init --y`.\n',
                verify: 'Package.json created'
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
                click: setup_actions_1.installTutorial,
                text: 'In terminal in this project directory run:\n`npm i --save coderoad-functional-school`',
                verify: 'Tutorial Installed'
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
