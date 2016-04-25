"use strict";
var _types_1 = require('./_types');
function positionLoad() {
    return { type: _types_1.POSITION_LOAD };
}
exports.positionLoad = positionLoad;
function positionSet(position) {
    return {
        payload: { position: position },
        type: _types_1.POSITION_SET,
    };
}
exports.positionSet = positionSet;
