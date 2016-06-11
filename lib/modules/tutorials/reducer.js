"use strict";
var coderoad_cli_1 = require('coderoad-cli');
var types_1 = require('./types');
function tutorialsReducer(t, action) {
    if (t === void 0) { t = []; }
    switch (action.type) {
        case types_1.TUTORIALS_FIND:
            var tuts = coderoad_cli_1.tutorials(action.payload.dir);
            return tuts ? tuts : t;
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialsReducer;
