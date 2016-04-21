"use strict";
var _types_1 = require('./_types');
function hintPositionSet(hintPosition) {
    return {
        payload: { hintPosition: hintPosition },
        type: _types_1.HINT_POSITION_SET,
    };
}
exports.hintPositionSet = hintPositionSet;
function hintShow() {
    return { type: _types_1.HINT_SHOW };
}
exports.hintShow = hintShow;
