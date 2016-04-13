"use strict";
var path = require('path');
var exists_1 = require('../../services/exists');
function setDir() {
    if (atom.project.rootDirectories.length > 0) {
        return atom.project.rootDirectories[0].path;
    }
    else {
        return null;
    }
}
exports.setDir = setDir;
function setWin() {
    return navigator.appVersion.indexOf('Win') > -1;
}
exports.setWin = setWin;
function setGlobals(packageJson) {
    window.coderoad = Object.assign(window.coderoad, {
        tutorial: packageJson.name,
        suffix: packageJson.config.testSuffix.substring(packageJson.config.testSuffix.lastIndexOf('.') + 1, packageJson.config.testSuffix.length),
        tutorialDir: path.join(window.coderoad.dir, 'node_modules', packageJson.name, packageJson.config.testDir),
        testRunner: packageJson.config.testRunner,
        testRunnerOptions: packageJson.config.testRunnerOptions || {}
    });
    loadRepo(packageJson);
    loadRunnerDep(packageJson);
}
exports.setGlobals = setGlobals;
function loadRunnerDep(packageJson) {
    var flatDep = path.join(window.coderoad.dir, 'node_modules', packageJson.config.testRunner, 'package.json');
    var treeDep = path.join(window.coderoad.dir, 'node_modules', packageJson.name, 'node_modules', packageJson.config.testRunner, 'package.json');
    var runnerMain;
    var runnerRoot;
    if (exists_1.fileExists(flatDep)) {
        runnerMain = require(flatDep).main;
        runnerRoot = flatDep;
    }
    else if (exists_1.fileExists(treeDep)) {
        runnerMain = require(treeDep).main;
        runnerRoot = treeDep;
    }
    else {
        var message = 'Error loading test runner. Post an issue. https://github.com/coderoad/atom-coderoad/issues';
        console.log(message);
        throw message;
    }
    var slash = window.coderoad.win ? '\\' : '/';
    runnerMain = path.join.apply(null, runnerMain.split(slash));
    runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));
    var pathToMain = path.join(runnerRoot, runnerMain);
    if (!!require(pathToMain).default) {
        window.coderoad.runner = require(pathToMain).default;
    }
    else {
        window.coderoad.runner = require(pathToMain);
    }
}
function loadRepo(packageJson) {
    if (packageJson.bugs && packageJson.bugs.url) {
        window.coderoad.issuesPath = packageJson.bugs.url;
    }
    if (packageJson.repo && packageJson.repo.url) {
        var repo = packageJson.repo.url;
        if (!!repo.match(/\.git$/)) {
            repo = repo.slice(0, repo.length - 4);
        }
        window.coderoad.repo = repo;
    }
    window.coderoad.edit = packageJson.config.edit && !!window.coderoad.repo || false;
}
