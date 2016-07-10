"use strict";
var path_1 = require('path');
var config_repo_1 = require('./config-repo');
var config_runner_1 = require('./config-runner');
function tutorialConfig(tutorialPj, dir) {
    var config = tutorialPj.config, name = tutorialPj.name;
    var repo = config_repo_1.configRepo(tutorialPj.repo);
    var tutorialDir = path_1.join(dir, 'node_modules', name, config.dir);
    var runner = config.runner;
    var runnerOptions = config.runnerOptions || {};
    var configEdit = tutorialPj.config.edit;
    return {
        dir: tutorialDir,
        runner: runner,
        runnerOptions: runnerOptions,
        run: config_runner_1.default(name, config.runner, dir),
        testSuffix: configTestSuffix(config.testSuffix),
        issuesPath: config_repo_1.configIssuesPath(tutorialPj.bugs),
        repo: repo,
        edit: !!repo && configEdit || false,
    };
}
exports.tutorialConfig = tutorialConfig;
function configTestSuffix(suffix) {
    return suffix.length && suffix[0] === '.' ? suffix : '.' + suffix || null;
}
