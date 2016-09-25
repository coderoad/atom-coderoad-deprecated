"use strict";
var index_1 = require('../../../index');
var system_1 = require('../../../utils/system');
var node_file_exists_1 = require('node-file-exists');
var path_1 = require('path');
function configRunner(name, runner, dir) {
    var flatDep = path_1.join(dir, 'node_modules', runner, 'package.json');
    var treeDep = path_1.join(dir, 'node_modules', name, 'node_modules', runner, 'package.json');
    var runnerMain;
    var runnerRoot;
    if (node_file_exists_1.default(flatDep)) {
        runnerMain = require(flatDep).main;
        runnerRoot = flatDep;
    }
    else if (node_file_exists_1.default(treeDep)) {
        runnerMain = require(treeDep).main;
        runnerRoot = treeDep;
    }
    else {
        var message = "Error loading test runner. Post an issue. " + index_1.editor.issuesPath;
        console.log(message);
        throw message;
    }
    var slash = system_1.isWindows ? '\\' : '/';
    runnerMain = path_1.join.apply(null, runnerMain.split(slash));
    runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));
    var pathToMain = path_1.join(runnerRoot, runnerMain);
    return {
        load: require(pathToMain).load || { load: function () { return console.log('Invalid test loader'); } },
        run: require(pathToMain).run || { run: function () { return console.log('Invalid test runner'); } },
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configRunner;
//# sourceMappingURL=config-runner.js.map