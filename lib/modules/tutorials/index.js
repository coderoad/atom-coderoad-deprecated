"use strict";
var types_1 = require('./types');
var latestVersion_1 = require('./utils/latestVersion');
var coderoad_cli_1 = require('coderoad-cli');
function tutorialsReducer(t, action) {
    if (t === void 0) { t = []; }
    switch (action.type) {
        case types_1.TUTORIALS_FIND:
            var tuts = coderoad_cli_1.tutorials({ dir: action.payload.dir });
            return tuts ? tuts : t;
        case types_1.TUTORIALS_UPDATE:
            return t.map(function (tutorial) {
                var name = tutorial.name, version = tutorial.version;
                latestVersion_1.default({ name: name, version: version });
                return tutorial;
            });
        case types_1.TUTORIAL_VERSION:
            var _a = action.payload, name_1 = _a.name, latest_1 = _a.latest;
            return t.map(function (tutorial) {
                if (tutorial.name === name_1) {
                    tutorial.isLatest = false;
                    tutorial.latest = latest_1;
                }
                return tutorial;
            });
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
//# sourceMappingURL=index.js.map