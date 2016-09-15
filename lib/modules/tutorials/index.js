"use strict";
var latestVersion_1 = require('./latestVersion');
var types_1 = require('./types');
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
                if (version) {
                    latestVersion_1.default({ name: name, version: version })
                        .then(function (x) { return tutorial.latest = x; });
                }
                return tutorial;
            });
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
