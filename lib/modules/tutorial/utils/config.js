"use strict";
var path_1 = require('path');
var config_repo_1 = require('./config-repo');
var config_runner_1 = require('./config-runner');
function tutorialConfig(tutorialPj, dir) {
    var config = tutorialPj.config, name = tutorialPj.name;
    var repo = config_repo_1.configRepo(tutorialPj.repo);
    var runner = config.runner;
    var runnerOptions = config.runnerOptions || {};
    var configEdit = tutorialPj.config.edit;
    var getRunner = config_runner_1.default(name, config.runner, dir);
    if (!getRunner || !getRunner.run || !getRunner.load) {
        console.log('Error loading test runner', getRunner);
    }
    return {
        dir: path_1.join(dir, 'node_modules', name, config.dir),
        runner: runner,
        runnerOptions: runnerOptions,
        run: getRunner.run,
        load: getRunner.load,
        testSuffix: configTestSuffix(config.testSuffix || 'js'),
        issuesPath: config_repo_1.configIssuesPath(tutorialPj.bugs),
        repo: repo,
        edit: !!repo && configEdit || false,
    };
}
exports.tutorialConfig = tutorialConfig;
function configTestSuffix(suffix) {
    return suffix.length && suffix[0] === '.' ? suffix : '.' + suffix || null;
}
