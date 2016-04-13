"use strict";
var Type = require('../../actions/actionTypes');
var set_globals_1 = require('./set-globals');
function globalReducer(globals, action) {
    if (globals === void 0) { globals = {}; }
    switch (action.type) {
        case Type.SET_GLOBALS:
            var coderoad = Object.assign({}, set_globals_1.setGlobals(action.payload.packageJson), window.coderoad);
            window.coderoad = coderoad;
            return coderoad;
        default:
            return globals;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = globalReducer;
