"use strict";
var path = require('path');
var exists_1 = require('./exists');
function setGlobals(config) {
    window.coderoad = Object.assign(window.coderoad, {
        tutorial: config.name,
        tutorialDir: path.join(window.coderoad.dir, 'node_modules', config.name, config.config.testDir),
        testRunner: config.config.testRunner,
        testRunnerOptions: config.config.testRunnerOptions || {}
    });
    loadRepo(config);
    loadRunnerDep(config);
}
exports.setGlobals = setGlobals;
function loadRunnerDep(config) {
    var flatDep = path.join(window.coderoad.dir, 'node_modules', config.config.testRunner, 'package.json');
    var treeDep = path.join(window.coderoad.dir, 'node_modules', config.name, 'node_modules', config.config.testRunner, 'package.json');
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
function loadRepo(config) {
    if (config.bugs && config.bugs.url) {
        window.coderoad.issuesPath = config.bugs.url;
    }
    if (config.repo && config.repo.url) {
        var repo = config.repo.url;
        if (!!repo.match(/\.git$/)) {
            repo = repo.slice(0, repo.length - 4);
        }
        window.coderoad.repo = repo;
    }
    window.coderoad.edit = config.config.edit && !!window.coderoad.repo || false;
}
