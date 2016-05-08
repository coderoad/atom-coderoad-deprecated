"use strict";
var path_1 = require('path');
var exists_1 = require('../../services/exists');
var system_1 = require('../../services/system');
function tutorialConfig(tutorialPj, dir) {
    var config = tutorialPj.config, name = tutorialPj.name;
    var repo = loadRepo(tutorialPj.repo);
    var testSuffix = config.testSuffix;
    return {
        dir: path_1.join(dir, 'node_modules', name, config.dir),
        testSuffix: testSuffix.length && testSuffix[0] === '.'
            ? testSuffix
            : '.' + testSuffix || null,
        runner: config.runner,
        runnerOptions: config.runnerOptions || {},
        run: loadRunner(name, config.runner, dir),
        repo: repo,
        edit: tutorialPj.config.edit && repo || false,
        issuesPath: getIssuesPath(tutorialPj.bugs)
    };
}
exports.tutorialConfig = tutorialConfig;
function getIssuesPath(bugs) {
    return bugs && bugs.url ? bugs.url : null;
}
function loadRunner(name, runner, dir) {
    var flatDep = path_1.join(dir, 'node_modules', runner, 'package.json');
    var treeDep = path_1.join(dir, 'node_modules', name, 'node_modules', runner, 'package.json');
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
    var slash = system_1.isWindows ? '\\' : '/';
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
function loadRepo(repo) {
    if (repo && repo.url) {
        var url = repo.url;
        if (!!url.match(/\.git$/)) {
            url = url.slice(0, url.length - 4);
        }
        return url;
    }
    return null;
}
