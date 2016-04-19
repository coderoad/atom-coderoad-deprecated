"use strict";
var path_1 = require('path');
var exists_1 = require('../../services/exists');
function tutorialConfig(tutorialPj) {
    return Object.assign({}, {
        tutorial: tutorialPj.name,
        suffix: tutorialPj.config.testSuffix.substring(tutorialPj.config.testSuffix.lastIndexOf('.') + 1, tutorialPj.config.testSuffix.length),
        tutorialDir: path_1.join(window.coderoad.dir, 'node_modules', tutorialPj.name, tutorialPj.config.testDir),
        testRunner: tutorialPj.config.testRunner,
        testRunnerOptions: tutorialPj.config.testRunnerOptions || {},
        runner: loadRunnerDep(tutorialPj),
        repo: loadRepo(tutorialPj),
        edit: tutorialPj.config.edit && !!window.coderoad.repo || false,
        issuesPath: tutorialPj.bugs && tutorialPj.bugs.url ? tutorialPj.bugs.url : null
    }, window.coderoad);
}
exports.tutorialConfig = tutorialConfig;
function loadRunnerDep(tutorialPj) {
    var flatDep = path_1.join(window.coderoad.dir, 'node_modules', tutorialPj.config.testRunner, 'package.json');
    var treeDep = path_1.join(window.coderoad.dir, 'node_modules', tutorialPj.name, 'node_modules', tutorialPj.config.testRunner, 'package.json');
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
    runnerMain = path_1.join.apply(null, runnerMain.split(slash));
    runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));
    var pathToMain = path_1.join(runnerRoot, runnerMain);
    if (!!require(pathToMain).default) {
        return require(pathToMain).default;
    }
    else {
        return require(pathToMain);
    }
}
function loadRepo(tutorialPj) {
    if (tutorialPj.repo && tutorialPj.repo.url) {
        var repo = tutorialPj.repo.url;
        if (!!repo.match(/\.git$/)) {
            repo = repo.slice(0, repo.length - 4);
        }
        return repo;
    }
    return null;
}
