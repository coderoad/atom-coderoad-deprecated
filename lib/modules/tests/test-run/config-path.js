"use strict";
var path_1 = require('path');
var system_1 = require('../../../utils/system');
function configPath(_a) {
    var dir = _a.dir, tutorial = _a.tutorial, testPath = _a.testPath;
    if (system_1.isWindows) {
        testPath = testPath.split('/').join('\\');
    }
    if (tutorial.config.dir) {
        testPath = path_1.join(tutorial.config.dir, testPath);
    }
    else {
        testPath = path_1.join(dir, 'node_modules', tutorial.name, testPath);
    }
    if (tutorial.config.testSuffix) {
        testPath += tutorial.config.testSuffix;
    }
    return testPath;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configPath;
//# sourceMappingURL=config-path.js.map