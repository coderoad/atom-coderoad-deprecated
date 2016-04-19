"use strict";
var _types_1 = require('../../actions/_types');
var set_globals_1 = require('./set-globals');
var _globals = {
    dir: null,
    win: null
};
function globalReducer(globals, action) {
    if (globals === void 0) { globals = _globals; }
    switch (action.type) {
        case _types_1.GLOBALS_SET:
            var coderoad = Object.assign({}, set_globals_1.globalsSet(action.payload.packageJson), window.coderoad);
            window.coderoad = coderoad;
            return coderoad;
        default:
            return globals;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = globalReducer;
