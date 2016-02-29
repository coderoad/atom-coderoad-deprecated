"use strict";
var path = require('path');
var exists_1 = require('./exists');
function setGlobals(config) {
    global.coderoad = Object.assign(global.coderoad, {
        tutorial: config.name,
        tutorialDir: path.join(global.coderoad.dir, 'node_modules', config.name, config.config.testDir),
        testRunner: config.config.testRunner,
        testRunnerOptions: config.config.testRunnerOptions || {}
    });
    loadRepo(config);
    loadRunnerDep(config);
}
exports.setGlobals = setGlobals;
function loadRunnerDep(config) {
    var flatDep = path.join(global.coderoad.dir, 'node_modules', config.config.testRunner, 'package.json');
    var treeDep = path.join(global.coderoad.dir, 'node_modules', config.name, 'node_modules', config.config.testRunner, 'package.json');
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
        var message = "Error loading test runner. Post an issue.";
        console.log(message);
        throw message;
    }
    runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf('/'));
    var pathToMain = path.join(runnerRoot, runnerMain);
    if (!!require(pathToMain).default) {
        global.coderoad.runner = require(pathToMain).default;
    }
    else {
        global.coderoad.runner = require(pathToMain);
    }
}
function loadRepo(config) {
    if (config.bugs && config.bugs.url) {
        global.coderoad.issuesPath = config.bugs.url;
    }
    if (config.repo && config.repo.url) {
        var repo = config.repo.url;
        if (!!repo.match(/\.git$/)) {
            repo = repo.slice(0, repo.length - 4);
        }
        global.coderoad.repo = repo;
    }
    global.coderoad.edit = config.config.edit && !!global.coderoad.repo || false;
}
