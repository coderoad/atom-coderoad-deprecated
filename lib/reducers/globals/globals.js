"use strict";
var Type = require('../../actions/actionTypes');
var set_globals_1 = require('./set-globals');
var defaultGlobals = {
    dir: set_globals_1.setDir(),
    win: set_globals_1.setWin()
};
function globalReducer(globals, action) {
    if (globals === void 0) { globals = defaultGlobals; }
    switch (action.type) {
        case Type.SET_GLOBALS:
            return Object.assign({}, set_globals_1.setGlobals(action.payload.packageJson), globals);
        default:
            return globals;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = globalReducer;
