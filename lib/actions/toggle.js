"use strict";
var _types_1 = require('./_types');
function windowToggle() {
    return { type: _types_1.WINDOW_TOGGLE };
}
exports.windowToggle = windowToggle;
function devToolsToggle() {
    return { type: _types_1.DEVTOOLS_TOGGLE };
}
exports.devToolsToggle = devToolsToggle;
function quit() {
    return { type: _types_1.QUIT };
}
exports.quit = quit;
